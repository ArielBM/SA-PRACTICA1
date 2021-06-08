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

        stage('deploy') {
            steps {
                echo 'Etapa de despliegue'
                sh 'sudo ng build --output-path /var/www/html/'
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}