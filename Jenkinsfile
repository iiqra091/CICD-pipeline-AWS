pipeline {
    agent any

    environment {
        PROJECT_DIR = "Attendance Management System"
    }

    stages {

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh '''
                    chmod +x node_modules/.bin/vite
                    npm run build
                    '''
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                sh '''
                pm2 delete backend || true
                cd backend
                pm2 start server.js --name backend
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                npm install -g serve
                serve -s frontend/dist -l 3000
                '''
            }
        }
    }
}