/**
 * Tools Index for Qwen Extension
 * Properly formatted for Qwen's tool system
 */

// Import all tools from the original converted set
import * as gitAdvancedWorkflows from '../../../qwen-plugin/tools/developer-essentials-git-advanced-workflows.js';
import * as apiDesignPrinciples from '../../../qwen-plugin/tools/backend-development-api-design-principles.js';
import * as architecturePatterns from '../../../qwen-plugin/tools/backend-development-architecture-patterns.js';
import * as microservicesPatterns from '../../../qwen-plugin/tools/backend-development-microservices-patterns.js';
import * as workflowOrchestrationPatterns from '../../../qwen-plugin/tools/backend-development-workflow-orchestration-patterns.js';
import * as temporalPythonTesting from '../../../qwen-plugin/tools/backend-development-temporal-python-testing.js';
import * as langchainArchitecture from '../../../qwen-plugin/tools/llm-application-dev-langchain-architecture.js';
import * as llmEvaluation from '../../../qwen-plugin/tools/llm-application-dev-llm-evaluation.js';
import * as promptEngineeringPatterns from '../../../qwen-plugin/tools/llm-application-dev-prompt-engineering-patterns.js';
import * as ragImplementation from '../../../qwen-plugin/tools/llm-application-dev-rag-implementation.js';
import * as mlPipelineWorkflow from '../../../qwen-plugin/tools/machine-learning-ops-ml-pipeline-workflow.js';
import * as distributedTracing from '../../../qwen-plugin/tools/observability-monitoring-distributed-tracing.js';
import * as grafanaDashboards from '../../../qwen-plugin/tools/observability-monitoring-grafana-dashboards.js';
import * as prometheusConfiguration from '../../../qwen-plugin/tools/observability-monitoring-prometheus-configuration.js';
import * as sloImplementation from '../../../qwen-plugin/tools/observability-monitoring-slo-implementation.js';
import * as gitopsWorkflow from '../../../qwen-plugin/tools/kubernetes-operations-gitops-workflow.js';
import * as helmChartScaffolding from '../../../qwen-plugin/tools/kubernetes-operations-helm-chart-scaffolding.js';
import * as k8sManifestGenerator from '../../../qwen-plugin/tools/kubernetes-operations-k8s-manifest-generator.js';
import * as k8sSecurityPolicies from '../../../qwen-plugin/tools/kubernetes-operations-k8s-security-policies.js';
import * as costOptimization from '../../../qwen-plugin/tools/cloud-infrastructure-cost-optimization.js';
import * as hybridCloudNetworking from '../../../qwen-plugin/tools/cloud-infrastructure-hybrid-cloud-networking.js';
import * as multiCloudArchitecture from '../../../qwen-plugin/tools/cloud-infrastructure-multi-cloud-architecture.js';
import * as terraformModuleLibrary from '../../../qwen-plugin/tools/cloud-infrastructure-terraform-module-library.js';
import * as deploymentPipelineDesign from '../../../qwen-plugin/tools/cicd-automation-deployment-pipeline-design.js';
import * as githubActionsTemplates from '../../../qwen-plugin/tools/cicd-automation-github-actions-templates.js';
import * as gitlabCiPatterns from '../../../qwen-plugin/tools/cicd-automation-gitlab-ci-patterns.js';
import * as secretsManagement from '../../../qwen-plugin/tools/cicd-automation-secrets-management.js';
import * as angularMigration from '../../../qwen-plugin/tools/framework-migration-angular-migration.js';
import * as databaseMigration from '../../../qwen-plugin/tools/framework-migration-database-migration.js';
import * as dependencyUpgrade from '../../../qwen-plugin/tools/framework-migration-dependency-upgrade.js';
import * as reactModernization from '../../../qwen-plugin/tools/framework-migration-react-modernization.js';
import * as postgresql from '../../../qwen-plugin/tools/database-design-postgresql.js';
import * as sastConfiguration from '../../../qwen-plugin/tools/security-scanning-sast-configuration.js';
import * as fastapiTemplates from '../../../qwen-plugin/tools/api-scaffolding-fastapi-templates.js';
import * as defiProtocolTemplates from '../../../qwen-plugin/tools/blockchain-web3-defi-protocol-templates.js';
import * as nftStandards from '../../../qwen-plugin/tools/blockchain-web3-nft-standards.js';
import * as soliditySecurity from '../../../qwen-plugin/tools/blockchain-web3-solidity-security.js';
import * as web3Testing from '../../../qwen-plugin/tools/blockchain-web3-web3-testing.js';
import * as billingAutomation from '../../../qwen-plugin/tools/payment-processing-billing-automation.js';
import * as paypalIntegration from '../../../qwen-plugin/tools/payment-processing-paypal-integration.js';
import * as pciCompliance from '../../../qwen-plugin/tools/payment-processing-pci-compliance.js';
import * as stripeIntegration from '../../../qwen-plugin/tools/payment-processing-stripe-integration.js';
import * as asyncPythonPatterns from '../../../qwen-plugin/tools/python-development-async-python-patterns.js';
import * as pythonTestingPatterns from '../../../qwen-plugin/tools/python-development-python-testing-patterns.js';
import * as pythonPackaging from '../../../qwen-plugin/tools/python-development-python-packaging.js';
import * as pythonPerformanceOptimization from '../../../qwen-plugin/tools/python-development-python-performance-optimization.js';
import * as uvPackageManager from '../../../qwen-plugin/tools/python-development-uv-package-manager.js';
import * as typescriptAdvancedTypes from '../../../qwen-plugin/tools/javascript-typescript-typescript-advanced-types.js';
import * as nodejsBackendPatterns from '../../../qwen-plugin/tools/javascript-typescript-nodejs-backend-patterns.js';
import * as javascriptTestingPatterns from '../../../qwen-plugin/tools/javascript-typescript-javascript-testing-patterns.js';
import * as modernJavascriptPatterns from '../../../qwen-plugin/tools/javascript-typescript-modern-javascript-patterns.js';
import * as shellScriptingSkill from '../../../qwen-plugin/tools/shell-scripting-skill-md.js';
import * as sqlOptimizationPatterns from '../../../qwen-plugin/tools/developer-essentials-sql-optimization-patterns.js';
import * as errorHandlingPatterns from '../../../qwen-plugin/tools/developer-essentials-error-handling-patterns.js';
import * as codeReviewExcellence from '../../../qwen-plugin/tools/developer-essentials-code-review-excellence.js';
import * as e2eTestingPatterns from '../../../qwen-plugin/tools/developer-essentials-e2e-testing-patterns.js';
import * as authImplementationPatterns from '../../../qwen-plugin/tools/developer-essentials-auth-implementation-patterns.js';
import * as debuggingStrategies from '../../../qwen-plugin/tools/developer-essentials-debugging-strategies.js';
import * as monorepoManagement from '../../../qwen-plugin/tools/developer-essentials-monorepo-management.js';

// Format tools for Qwen's tool system
const tools = {
  'git-advanced-workflows': {
    // Get the original tool and extend it with Qwen-specific properties
    ...gitAdvancedWorkflows.default || gitAdvancedWorkflows,
    // Qwen-specific fields
    name: 'git-advanced-workflows',
    description: 'Expert in advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog to maintain clean history and recover from any situation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Optional parameters for Git workflow operations',
        }
      },
      required: []
    }
  },
  'api-design-principles': {
    ...apiDesignPrinciples.default || apiDesignPrinciples,
    name: 'api-design-principles',
    description: 'Expert in API design principles including REST/GraphQL best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for API design',
        }
      },
      required: []
    }
  },
  'architecture-patterns': {
    ...architecturePatterns.default || architecturePatterns,
    name: 'architecture-patterns',
    description: 'Knowledgeable about software architecture patterns and best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for architecture design',
        }
      },
      required: []
    }
  },
  'microservices-patterns': {
    ...microservicesPatterns.default || microservicesPatterns,
    name: 'microservices-patterns',
    description: 'Expert in microservices architecture patterns and design principles',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for microservices design',
        }
      },
      required: []
    }
  },
  'workflow-orchestration-patterns': {
    ...workflowOrchestrationPatterns.default || workflowOrchestrationPatterns,
    name: 'workflow-orchestration-patterns',
    description: 'Specialist in workflow orchestration patterns and best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for workflow orchestration',
        }
      },
      required: []
    }
  },
  'temporal-python-testing': {
    ...temporalPythonTesting.default || temporalPythonTesting,
    name: 'temporal-python-testing',
    description: 'Expert in Temporal workflow patterns with Python testing',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Temporal Python testing',
        }
      },
      required: []
    }
  },
  'langchain-architecture': {
    ...langchainArchitecture.default || langchainArchitecture,
    name: 'langchain-architecture',
    description: 'Expert in LangChain architecture and implementation patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for LangChain architecture',
        }
      },
      required: []
    }
  },
  'llm-evaluation': {
    ...llmEvaluation.default || llmEvaluation,
    name: 'llm-evaluation',
    description: 'Specialist in LLM evaluation and assessment techniques',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for LLM evaluation',
        }
      },
      required: []
    }
  },
  'prompt-engineering-patterns': {
    ...promptEngineeringPatterns.default || promptEngineeringPatterns,
    name: 'prompt-engineering-patterns',
    description: 'Expert in prompt engineering patterns and optimization techniques',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for prompt engineering',
        }
      },
      required: []
    }
  },
  'rag-implementation': {
    ...ragImplementation.default || ragImplementation,
    name: 'rag-implementation',
    description: 'Specialist in RAG (Retrieval Augmented Generation) implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for RAG implementation',
        }
      },
      required: []
    }
  },
  'ml-pipeline-workflow': {
    ...mlPipelineWorkflow.default || mlPipelineWorkflow,
    name: 'ml-pipeline-workflow',
    description: 'Expert in ML pipeline workflows and implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for ML pipeline workflow',
        }
      },
      required: []
    }
  },
  'distributed-tracing': {
    ...distributedTracing.default || distributedTracing,
    name: 'distributed-tracing',
    description: 'Expert in distributed tracing implementation and best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for distributed tracing',
        }
      },
      required: []
    }
  },
  'grafana-dashboards': {
    ...grafanaDashboards.default || grafanaDashboards,
    name: 'grafana-dashboards',
    description: 'Specialist in Grafana dashboard creation and configuration',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Grafana dashboards',
        }
      },
      required: []
    }
  },
  'prometheus-configuration': {
    ...prometheusConfiguration.default || prometheusConfiguration,
    name: 'prometheus-configuration',
    description: 'Expert in Prometheus configuration and monitoring setup',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Prometheus configuration',
        }
      },
      required: []
    }
  },
  'slo-implementation': {
    ...sloImplementation.default || sloImplementation,
    name: 'slo-implementation',
    description: 'Specialist in SLO (Service Level Objective) implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for SLO implementation',
        }
      },
      required: []
    }
  },
  'gitops-workflow': {
    ...gitopsWorkflow.default || gitopsWorkflow,
    name: 'gitops-workflow',
    description: 'Expert in GitOps workflow patterns and implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for GitOps workflow',
        }
      },
      required: []
    }
  },
  'helm-chart-scaffolding': {
    ...helmChartScaffolding.default || helmChartScaffolding,
    name: 'helm-chart-scaffolding',
    description: 'Specialist in Helm chart creation and scaffolding',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Helm chart scaffolding',
        }
      },
      required: []
    }
  },
  'k8s-manifest-generator': {
    ...k8sManifestGenerator.default || k8sManifestGenerator,
    name: 'k8s-manifest-generator',
    description: 'Expert in Kubernetes manifest generation and best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Kubernetes manifest generation',
        }
      },
      required: []
    }
  },
  'k8s-security-policies': {
    ...k8sSecurityPolicies.default || k8sSecurityPolicies,
    name: 'k8s-security-policies',
    description: 'Specialist in Kubernetes security policies and configuration',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Kubernetes security policies',
        }
      },
      required: []
    }
  },
  'cost-optimization': {
    ...costOptimization.default || costOptimization,
    name: 'cost-optimization',
    description: 'Expert in cloud cost optimization strategies and techniques',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for cost optimization',
        }
      },
      required: []
    }
  },
  'hybrid-cloud-networking': {
    ...hybridCloudNetworking.default || hybridCloudNetworking,
    name: 'hybrid-cloud-networking',
    description: 'Specialist in hybrid cloud networking architecture',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for hybrid cloud networking',
        }
      },
      required: []
    }
  },
  'multi-cloud-architecture': {
    ...multiCloudArchitecture.default || multiCloudArchitecture,
    name: 'multi-cloud-architecture',
    description: 'Expert in multi-cloud architecture design and implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for multi-cloud architecture',
        }
      },
      required: []
    }
  },
  'terraform-module-library': {
    ...terraformModuleLibrary.default || terraformModuleLibrary,
    name: 'terraform-module-library',
    description: 'Specialist in Terraform module development and best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Terraform modules',
        }
      },
      required: []
    }
  },
  'deployment-pipeline-design': {
    ...deploymentPipelineDesign.default || deploymentPipelineDesign,
    name: 'deployment-pipeline-design',
    description: 'Expert in CI/CD pipeline design and implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for deployment pipeline design',
        }
      },
      required: []
    }
  },
  'github-actions-templates': {
    ...githubActionsTemplates.default || githubActionsTemplates,
    name: 'github-actions-templates',
    description: 'Specialist in GitHub Actions template creation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for GitHub Actions templates',
        }
      },
      required: []
    }
  },
  'gitlab-ci-patterns': {
    ...gitlabCiPatterns.default || gitlabCiPatterns,
    name: 'gitlab-ci-patterns',
    description: 'Expert in GitLab CI pattern implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for GitLab CI patterns',
        }
      },
      required: []
    }
  },
  'secrets-management': {
    ...secretsManagement.default || secretsManagement,
    name: 'secrets-management',
    description: 'Specialist in secrets management best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for secrets management',
        }
      },
      required: []
    }
  },
  'angular-migration': {
    ...angularMigration.default || angularMigration,
    name: 'angular-migration',
    description: 'Expert in Angular application migration strategies',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Angular migration',
        }
      },
      required: []
    }
  },
  'database-migration': {
    ...databaseMigration.default || databaseMigration,
    name: 'database-migration',
    description: 'Specialist in database migration patterns and best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for database migration',
        }
      },
      required: []
    }
  },
  'dependency-upgrade': {
    ...dependencyUpgrade.default || dependencyUpgrade,
    name: 'dependency-upgrade',
    description: 'Expert in dependency upgrade strategies',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for dependency upgrades',
        }
      },
      required: []
    }
  },
  'react-modernization': {
    ...reactModernization.default || reactModernization,
    name: 'react-modernization',
    description: 'Specialist in React application modernization',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for React modernization',
        }
      },
      required: []
    }
  },
  'postgresql': {
    ...postgresql.default || postgresql,
    name: 'postgresql',
    description: 'Expert in PostgreSQL database design and optimization',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for PostgreSQL design',
        }
      },
      required: []
    }
  },
  'sast-configuration': {
    ...sastConfiguration.default || sastConfiguration,
    name: 'sast-configuration',
    description: 'Specialist in SAST (Static Analysis Security Testing) configuration',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for SAST configuration',
        }
      },
      required: []
    }
  },
  'fastapi-templates': {
    ...fastapiTemplates.default || fastapiTemplates,
    name: 'fastapi-templates',
    description: 'Expert in FastAPI template creation and usage',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for FastAPI templates',
        }
      },
      required: []
    }
  },
  'defi-protocol-templates': {
    ...defiProtocolTemplates.default || defiProtocolTemplates,
    name: 'defi-protocol-templates',
    description: 'Specialist in DeFi protocol templates and patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for DeFi protocol templates',
        }
      },
      required: []
    }
  },
  'nft-standards': {
    ...nftStandards.default || nftStandards,
    name: 'nft-standards',
    description: 'Expert in NFT standards and implementation',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for NFT standards',
        }
      },
      required: []
    }
  },
  'solidity-security': {
    ...soliditySecurity.default || soliditySecurity,
    name: 'solidity-security',
    description: 'Specialist in Solidity smart contract security',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Solidity security',
        }
      },
      required: []
    }
  },
  'web3-testing': {
    ...web3Testing.default || web3Testing,
    name: 'web3-testing',
    description: 'Expert in Web3 application testing strategies',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Web3 testing',
        }
      },
      required: []
    }
  },
  'billing-automation': {
    ...billingAutomation.default || billingAutomation,
    name: 'billing-automation',
    description: 'Specialist in billing automation systems',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for billing automation',
        }
      },
      required: []
    }
  },
  'paypal-integration': {
    ...paypalIntegration.default || paypalIntegration,
    name: 'paypal-integration',
    description: 'Expert in PayPal integration patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for PayPal integration',
        }
      },
      required: []
    }
  },
  'pci-compliance': {
    ...pciCompliance.default || pciCompliance,
    name: 'pci-compliance',
    description: 'Specialist in PCI compliance requirements',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for PCI compliance',
        }
      },
      required: []
    }
  },
  'stripe-integration': {
    ...stripeIntegration.default || stripeIntegration,
    name: 'stripe-integration',
    description: 'Expert in Stripe integration patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Stripe integration',
        }
      },
      required: []
    }
  },
  'async-python-patterns': {
    ...asyncPythonPatterns.default || asyncPythonPatterns,
    name: 'async-python-patterns',
    description: 'Specialist in async Python patterns and best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for async Python patterns',
        }
      },
      required: []
    }
  },
  'python-testing-patterns': {
    ...pythonTestingPatterns.default || pythonTestingPatterns,
    name: 'python-testing-patterns',
    description: 'Expert in Python testing patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Python testing',
        }
      },
      required: []
    }
  },
  'python-packaging': {
    ...pythonPackaging.default || pythonPackaging,
    name: 'python-packaging',
    description: 'Specialist in Python packaging best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Python packaging',
        }
      },
      required: []
    }
  },
  'python-performance-optimization': {
    ...pythonPerformanceOptimization.default || pythonPerformanceOptimization,
    name: 'python-performance-optimization',
    description: 'Expert in Python performance optimization',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Python performance',
        }
      },
      required: []
    }
  },
  'uv-package-manager': {
    ...uvPackageManager.default || uvPackageManager,
    name: 'uv-package-manager',
    description: 'Specialist in UV package manager usage',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for UV package management',
        }
      },
      required: []
    }
  },
  'typescript-advanced-types': {
    ...typescriptAdvancedTypes.default || typescriptAdvancedTypes,
    name: 'typescript-advanced-types',
    description: 'Expert in TypeScript advanced type patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for TypeScript types',
        }
      },
      required: []
    }
  },
  'nodejs-backend-patterns': {
    ...nodejsBackendPatterns.default || nodejsBackendPatterns,
    name: 'nodejs-backend-patterns',
    description: 'Specialist in Node.js backend patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for Node.js backend',
        }
      },
      required: []
    }
  },
  'javascript-testing-patterns': {
    ...javascriptTestingPatterns.default || javascriptTestingPatterns,
    name: 'javascript-testing-patterns',
    description: 'Expert in JavaScript testing patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for JavaScript testing',
        }
      },
      required: []
    }
  },
  'modern-javascript-patterns': {
    ...modernJavascriptPatterns.default || modernJavascriptPatterns,
    name: 'modern-javascript-patterns',
    description: 'Specialist in modern JavaScript patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for modern JavaScript',
        }
      },
      required: []
    }
  },
  'shell-scripting-skill': {
    ...shellScriptingSkill.default || shellScriptingSkill,
    name: 'shell-scripting-skill',
    description: 'Expert in shell scripting best practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for shell scripting',
        }
      },
      required: []
    }
  },
  'sql-optimization-patterns': {
    ...sqlOptimizationPatterns.default || sqlOptimizationPatterns,
    name: 'sql-optimization-patterns',
    description: 'Specialist in SQL optimization patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for SQL optimization',
        }
      },
      required: []
    }
  },
  'error-handling-patterns': {
    ...errorHandlingPatterns.default || errorHandlingPatterns,
    name: 'error-handling-patterns',
    description: 'Expert in error handling patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for error handling',
        }
      },
      required: []
    }
  },
  'code-review-excellence': {
    ...codeReviewExcellence.default || codeReviewExcellence,
    name: 'code-review-excellence',
    description: 'Specialist in code review excellence practices',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for code review',
        }
      },
      required: []
    }
  },
  'e2e-testing-patterns': {
    ...e2eTestingPatterns.default || e2eTestingPatterns,
    name: 'e2e-testing-patterns',
    description: 'Expert in end-to-end testing patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for end-to-end testing',
        }
      },
      required: []
    }
  },
  'auth-implementation-patterns': {
    ...authImplementationPatterns.default || authImplementationPatterns,
    name: 'auth-implementation-patterns',
    description: 'Specialist in authentication implementation patterns',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for authentication',
        }
      },
      required: []
    }
  },
  'debugging-strategies': {
    ...debuggingStrategies.default || debuggingStrategies,
    name: 'debugging-strategies',
    description: 'Expert in debugging strategies and techniques',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for debugging',
        }
      },
      required: []
    }
  },
  'monorepo-management': {
    ...monorepoManagement.default || monorepoManagement,
    name: 'monorepo-management',
    description: 'Specialist in monorepo management strategies',
    input_schema: {
      type: 'object',
      properties: {
        params: {
          type: 'object',
          description: 'Parameters for monorepo management',
        }
      },
      required: []
    }
  }
};

export default tools;