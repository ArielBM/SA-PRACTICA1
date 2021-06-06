pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                //sh 'npm install'
                echo 'Etapa de construcción'
                sh 'cd ./sa-practica1'
                sh 'npm install'
            }
        }

        stage('test') {
            steps {
                sh 'cd ./sa-practica1'
                sh 'ng test'
            }
        }

        stage('run') {
            steps {
                sh 'cd ./sa-practica1'
                sh 'ng start'
            }
        }
    }
}