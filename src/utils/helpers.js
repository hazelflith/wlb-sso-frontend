import {APP_COOKIE} from './globals'
console.log(APP_COOKIE)
export function convertToRupiah(angka) {
  let rupiah = ''
  const angkarev = angka
    .toString()
    .split('')
    .reverse()
    .join('')
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'

  return (
    'Rp' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('') +
    ',00'
  )
}

export function convertToAngka(rupiah) {
  return parseInt(rupiah.replace(/[^0-9]/g, ''), 10)
}

export function nextAlphabet(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1)
}

export function countDownTimer(seconds) {
  let second = seconds / 1000
  let h = Math.floor(second / 3600),
    m = Math.floor((second % 3600) / 60),
    s = Math.floor((second % 3600) % 60)

  if (h < 10) h = '0' + h
  if (m < 10) m = '0' + m
  if (s < 10) s = '0' + s

  return h + ':' + m + ':' + s
}

export function getDate(date) {
  const initDate = new Date(date)
  let dd = initDate.getDate()
  let mm = initDate.getMonth() + 1
  let yyyy = initDate.getFullYear()
  if (dd < 10) {
    dd = `0${dd}`
  }

  if (mm < 10) {
    mm = `0${mm}`
  }

  const dateFull = `${dd}/${mm}/${yyyy}`
  return dateFull
}

export function createCookie(name, value, days) {
  let expires = ''

  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; Expires=${date.toUTCString()}`
  }

  document.cookie = `${name}=${value}${expires}; Path=/; Domain=${APP_COOKIE}; Secure; SameSite=Lax`
}

export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=')
    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1
      let c_end = document.cookie.indexOf(';', c_start)
      if (c_end === -1) {
        c_end = document.cookie.length
      }
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}
