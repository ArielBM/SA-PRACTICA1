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
                sh 'ng test'
            }
        }

        stage('run') {
            steps {
                echo 'Etapa de ejecución'
                sh 'ng start'
            }
        }
    }
}