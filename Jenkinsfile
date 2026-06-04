pipeline {
    agent any
    
    environment {
        APP_NAME = 'my-portfolio'
        HOST_PORT = '80'
    }
    
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t my-portfolio .'
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    docker stop my-portfolio || true
                    docker rm my-portfolio || true
                    docker run -d --name my-portfolio -p ${HOST_PORT}:80 my-portfolio
                '''
            }
        }
    }
}
