pipeline {
    agent any
    stages {
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner';
                    withSonarQubeEnv() {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Install pnpm') {
            agent {
                docker {
                    image 'node:24-alpine'
                    args '-u root'
                }
            }
            steps {
                sh 'npm i -g pnpm'
                sh 'pnpm --version'
                sh 'pnpm install'
                sh 'pnpm run build'
            }
        }
    }
}
