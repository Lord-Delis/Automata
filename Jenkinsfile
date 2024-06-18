pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = 'C:\\Users\\hp\\AppData\\Local\\Cypress\\Cache'
        NO_COLOR = 'true'
    }

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                script {
                    if (!fileExists("${env.CYPRESS_CACHE_FOLDER}\\13.11.0\\Cypress\\Cypress.exe")) {
                        bat 'npm i'
                    }else {
                        echo 'Cypress binary already installed.'
                    }
                }
            }
        }
        stage('Testing') {
            steps {
                echo 'Testing in progress...'
                bat 'npx cypress run'
            }
        }
        stage('Deploying') {
                steps {
                    always {
                        echo 'Deploying the application'
                    }
                }
        }
    }
}
