pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "naidu289/praveentravells"
        DOCKER_TAG = "latest"
        DOCKER_REGISTRY = "https://hub.docker.com"
        KUBE_CONFIG = "/path/to/kube/config"
        SONARQUBE_URL = "http://your-sonarqube-server"
        SONARQUBE_CREDENTIALS = "sonarqube-credentials"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Gppsv143/praveentravells.git'
            }
        }

        stage('Maven Build') {
            steps {
                script {
                    sh 'mvn clean install'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'mvn sonar:sonar'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(DOCKER_REGISTRY, 'docker-hub-credentials') {
                        sh 'docker push ${DOCKER_IMAGE}:${DOCKER_TAG}'
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh "kubectl --kubeconfig=${KUBE_CONFIG} apply -f k8s/deployment.yaml"
                    sh "kubectl --kubeconfig=${KUBE_CONFIG} apply -f k8s/service.yaml"
                }
            }
        }

        stage('ArgoCD Sync') {
            steps {
                script {
                    sh 'argocd app sync praveentravells-app'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'There was an error during the build or deployment.'
        }
    }
}

