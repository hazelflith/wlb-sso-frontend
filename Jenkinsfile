pipeline {  
  agent any
  environment {
      HOME = '.'
  } 
  options { 
    buildDiscarder(logRotator(numToKeepStr: '5')) 
  }
  stages {
/*    stage('sonarqube') {
        environment {
            scannerHome = tool 'SonarQube'
        }
        steps {
            withSonarQubeEnv('sonarqube') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
            timeout(time: 10, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
            }
        }*/

    stage('Define Environment') {  
      steps { 
        script {
              if (env.BRANCH_NAME == 'development'){
                  sh '''
                  cp -r /var/lib/cloudbees-jenkins-distribution/workspace/env-fe/.gdrive/ .
                  gdrive export 1MH8nGQKX2gZSvBw7T5COkAeJ9wDiT2_qrj5-HVOvlDU --force
                  pdftotext -layout sso-dev.pdf .env
                  cat .env
                  '''
              }
              else if (env.BRANCH_NAME == 'master'){
                  sh '''                  
                  cp -r /var/lib/jenkins/.gdrive .
                  gdrive export 1IUwOtTwt5iyl4LLgpEg7hXucdb30Z1twhRwleEc8wS4 --force
                  pdftotext -layout sso-prod.pdf .env
                  cat .env
                  '''
              }
              else if (env.BRANCH_NAME == 'prod'){
                  sh '''                  
                  cp -r /var/lib/cloudbees-jenkins-distribution/workspace/env-fe/.gdrive/ .
                  gdrive export 1Z2hvzkAMV5w5eO1ZA1Xb6rpbfEDbDLbP_Eo8pkN9FVI --force
                  pdftotext -layout sso-prod.pdf .env
                  cat .env
                  '''
              }
              else {
                  sh 'echo Nothing to Build'
              }
          }             
      }
    }
    stage('Build Vercel React') {  
      steps { 
        script {
              if (env.BRANCH_NAME == 'development'){
                  sh 'yarn'
                  sh 'yarn install'
                  sh 'yarn build'
              }
              else if (env.BRANCH_NAME == 'master'){
                  sh 'yarn'
                  sh 'yarn install'
                  sh 'yarn build'
              }
              else if (env.BRANCH_NAME == 'prod'){
                  sh 'yarn'
                  sh 'yarn install'
                  sh 'yarn build'
              }
              else {
                  sh 'echo Nothing to Build'
              }
          }             
      }
    }

/*    stage('Build Dockerfile React') {  
      steps { 
        script {
              if (env.BRANCH_NAME == 'development'){
                  sh 'docker build -f "Dockerfile-dev" -t gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-dev .'
              }
              else if (env.BRANCH_NAME == 'staging'){
                  sh 'docker build -f "Dockerfile-staging" -t gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-staging .'
              }
              else if (env.BRANCH_NAME == 'production'){
                  sh 'docker build -f "Dockerfile" -t gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-prod .'
              }
        else if (env.BRANCH_NAME == 'devops'){
                  sh 'docker build -f "Dockerfile" -t gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-devops .'
              }
              else {
                  sh 'docker build -t gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-PR .'
              }
          }             
      } 
    }
    stage('Publish React') {  
      steps {
        script {
              if (env.BRANCH_NAME == 'development'){
                  sh 'docker push gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-dev'
              }
              else if (env.BRANCH_NAME == 'staging'){
                  sh 'docker push gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-staging'
              }
              else if (env.BRANCH_NAME == 'production'){
                  sh 'docker push gcr.io/wlb-dev/wlb-sso-frontend-v2:1.0.$BUILD_NUMBER-prod'
              }
          }   
      }       
    }   */
    stage('Deploy to Vercel') {    
      steps {
        script {
          sh '''
          vercel --token Xg8hlPYncgqWNyMcbGdAoJDB --prod
          '''
               }
            }   
          }
        }
      post {
            success {
                mattermostSend channel: '#dev-ops',
                color: 'good',
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            }    

            failure {
                mattermostSend channel: '#dev-ops',
                color: 'danger',
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            }
        }
} 