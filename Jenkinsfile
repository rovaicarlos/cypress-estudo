pipeline {
    agent any

    environment {
        SERVEREST_PORT = "3000"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Start ServeRest') {
            steps {
                sh '''
                    echo "Iniciando ServeRest..."
                    npx serverest@latest --port $SERVEREST_PORT &
                    echo $! > serverest.pid
                    sleep 5
                '''
            }
        }

        stage('Run Cypress E2E (DEV)') {
            steps {
                sh 'npm run cy:run:dev'
            }
        }

        stage('Run Cypress API Tests') {
            steps {
                sh 'npm run cy:run:api'
            }
        }
    }

    post {
        always {
            echo "Finalizando ServeRest..."
            sh '''
                if [ -f serverest.pid ]; then
                    kill -9 $(cat serverest.pid) || true
                fi
            '''
        }
        success {
            echo "Pipeline executado com sucesso 🚀"
        }
        failure {
            echo "Pipeline falhou ❌"
        }
    }
}