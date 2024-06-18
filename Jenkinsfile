pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "${HOME}/.cache/Cypress"
    }

    /**parameters{
        string(
            name: 'SPEC',
            defaultValue: 'cypress/e2e/*.cy.js',
            description: 'Enter the script path that you want to execute'
            )
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'edge', 'firefox'],
            description: 'Pick the web browser you want to use to run your scripts'
            )
    }**/

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
            }
            steps {
                if (!fileExists("${env.CYPRESS_CACHE_FOLDER}/13.11.0/Cypress/Cypress.exe")) {
                        bat 'npm i'
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

    /**post{
        always{
            script {
                BUILD_USER = getBuildUser()
            }

            slackSend channel: '#jenkins-example',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER} \n More info at: ${env.BUILD_URL}HTML_20Report/"

            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'cypress/reports',
                reportFiles: 'index.html',
                reportName: 'HTML Report',
                reportTitles: ''
                ])
            deleteDir()
        }
    }**/
}
