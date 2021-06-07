pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'Etapa de construcción'
                sh 'npm install'
            }
        }

        stage('test') {
            steps {
                echo 'Etapa de pruebas'
                sh 'ng test --watch=false'
            }
        }

        stage('run') {
            steps {
                echo 'Etapa de ejecución'
                sh 'pm2 start "ng serve"'
            }
        }
    }
}