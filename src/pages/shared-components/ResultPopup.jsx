import React from 'react'
import {DialogContent, DialogActions, Button, Dialog} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import {TextHeader} from '../login/LoginStyles'

const useStyles = makeStyles(() => ({
  checkContainer: {
    display: 'flex',
    padding: '16px 0 0',
    alignItems: 'center',
  },
  checkbox: {padding: 5, marginRight: 10},

  content: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    padding: 24,
    width: '412px !important',
  },
  btnPopup: {
    width: '212px !important',
    backgroundColor: '#02798F',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#02798F',
    },
  },
  actions: {paddingRight: 24, paddingBottom: 24},
  wordBreak: {
    wordBreak: 'break-all',
    color: '#014a62',
    textTransform: 'capitalize',
  },
  btnCancel: {
    color: '#a9a8a8',
    backgroundColor: '#ffffff',
    boxShadow: 'initial',
  },
  word: {wordBreak: 'break-all'},
  nameStyle: {
    color: '#014a62',
    fontWeight: '600',
  },
  dialog: {
    width: '412px !important',
  },
}))

export default function Result(props) {
  const classes = useStyles()
  const {open, handleClose, feature, message, type} = props

  return (
    <div className="flex flex-row justify-center">
      <div>
        <Dialog onClose={handleClose} open={open} maxWidth="sm">
          <DialogContent className={classes.content}>
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <ErrorOutlineIcon
                  style={{
                    fontSize: '120px',
                    color: '#ef4d5e',
                  }}
                />
              </div>
              <div className="flex flex-row justify-center">
                <TextHeader className="text md:text-2xl lg:text-2xl">
                  <span className="font-bold">{feature}</span>
                </TextHeader>
              </div>
              <div className="flex flex-row justify-center mt-2">
                <TextHeader
                  className="mr-4 text cursor-pointer text-gray-500"
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                  }}
                >
                  {message}
                </TextHeader>
              </div>
              <div className="flex flex-row justify-center mt-8">
                <Button
                  className={classes.btnPopup}
                  variant="contained"
                  // color="secondary"
                  onClick={() => {
                    handleClose()
                  }}
                >
                  {type}
                </Button>
              </div>
            </div>
          </DialogContent>
          <DialogActions className={classes.actions}></DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
