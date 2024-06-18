pipeline{

    agent any

    parameters{
        string(
            name: 'SPEC',
            defaultValue: 'cypress/e2e/**/**',
            description: 'Enter the script path that you want to execute'
            )
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'edge', 'firefox'],
            description: 'Pick the web browser you want to use to run your scripts'
            )
    }

    options{
        ansiColor('xterm')
        timestamp()
    }

    stages{
        stage('Building'){
            steps{
                echo 'Building the application...'
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo 'Deploying the application'
            }
        }
    }

    post{
        always{
            /**script {
                BUILD_USER = getBuildUser()
            }**/
            
            /**slackSend channel: '#jenkins-example',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER} \n More info at: ${env.BUILD_URL}HTML_20Report/"**/
            
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
    }

}