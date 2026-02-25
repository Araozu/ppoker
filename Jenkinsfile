pipeline {
    agent {
        docker {
            image 'node:24-alpine'
            args '-u root'
        }
    }
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
            steps {
                sh 'npm i -g pnpm'
                sh 'pnpm --version'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }
        stage('Build') {
            steps {
                sh 'pnpm run build'
            }
        }
    }
}
