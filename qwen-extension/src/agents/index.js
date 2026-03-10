/**
 * Agents Index for Qwen Extension
 * Dynamically imports agents from the converted set
 * Formatted as tools for Qwen's AI to use
 */

// Import all agents from the original converted set
import * as docsArchitect from '../../../qwen-plugin/agents/code-documentation-docs-architect.js';
import * as tutorialEngineer from '../../../qwen-plugin/agents/code-documentation-tutorial-engineer.js';
import * as codeReviewer from '../../../qwen-plugin/agents/code-documentation-code-reviewer.js';
import * as debuggerAgent from '../../../qwen-plugin/agents/debugging-toolkit-debugger.js';
import * as dxOptimizer from '../../../qwen-plugin/agents/debugging-toolkit-dx-optimizer.js';
import * as backendArchitect from '../../../qwen-plugin/agents/backend-development-backend-architect.js';
import * as graphqlArchitect from '../../../qwen-plugin/agents/backend-development-graphql-architect.js';
import * as tddOrchestrator from '../../../qwen-plugin/agents/backend-development-tdd-orchestrator.js';
import * as temporalPythonPro from '../../../qwen-plugin/agents/backend-development-temporal-python-pro.js';
import * as frontendDeveloper from '../../../qwen-plugin/agents/frontend-mobile-development-frontend-developer.js';
import * as mobileDeveloper from '../../../qwen-plugin/agents/frontend-mobile-development-mobile-developer.js';
import * as testAutomator from '../../../qwen-plugin/agents/full-stack-orchestration-test-automator.js';
import * as securityAuditor from '../../../qwen-plugin/agents/full-stack-orchestration-security-auditor.js';
import * as performanceEngineer from '../../../qwen-plugin/agents/full-stack-orchestration-performance-engineer.js';
import * as deploymentEngineer from '../../../qwen-plugin/agents/full-stack-orchestration-deployment-engineer.js';
import * as aiEngineer from '../../../qwen-plugin/agents/llm-application-dev-ai-engineer.js';
import * as promptEngineer from '../../../qwen-plugin/agents/llm-application-dev-prompt-engineer.js';
import * as contextManager from '../../../qwen-plugin/agents/agent-orchestration-context-manager.js';
import * as dataScientist from '../../../qwen-plugin/agents/machine-learning-ops-data-scientist.js';
import * as mlEngineer from '../../../qwen-plugin/agents/machine-learning-ops-ml-engineer.js';
import * as mlopsEngineer from '../../../qwen-plugin/agents/machine-learning-ops-mlops-engineer.js';
import * as dataEngineer from '../../../qwen-plugin/agents/data-engineering-data-engineer.js';
import * as incidentResponder from '../../../qwen-plugin/agents/incident-response-incident-responder.js';
import * as devopsTroubleshooter from '../../../qwen-plugin/agents/incident-response-devops-troubleshooter.js';
import * as errorDetective from '../../../qwen-plugin/agents/error-diagnostics-error-detective.js';
import * as observabilityEngineer from '../../../qwen-plugin/agents/observability-monitoring-observability-engineer.js';
import * as databaseOptimizer from '../../../qwen-plugin/agents/observability-monitoring-database-optimizer.js';
import * as networkEngineer from '../../../qwen-plugin/agents/observability-monitoring-network-engineer.js';
import * as kubernetesArchitect from '../../../qwen-plugin/agents/kubernetes-operations-kubernetes-architect.js';
import * as cloudArchitect from '../../../qwen-plugin/agents/cloud-infrastructure-cloud-architect.js';
import * as hybridCloudArchitect from '../../../qwen-plugin/agents/cloud-infrastructure-hybrid-cloud-architect.js';
import * as terraformSpecialist from '../../../qwen-plugin/agents/cloud-infrastructure-terraform-specialist.js';
import * as legacyModernizer from '../../../qwen-plugin/agents/code-refactoring-legacy-modernizer.js';
import * as architectReview from '../../../qwen-plugin/agents/comprehensive-review-architect-review.js';
import * as databaseArchitect from '../../../qwen-plugin/agents/database-design-database-architect.js';
import * as sqlPro from '../../../qwen-plugin/agents/database-design-sql-pro.js';
import * as databaseAdmin from '../../../qwen-plugin/agents/database-migrations-database-admin.js';
import * as backendSecurityCoder from '../../../qwen-plugin/agents/backend-api-security-backend-security-coder.js';
import * as frontendSecurityCoder from '../../../qwen-plugin/agents/frontend-mobile-security-frontend-security-coder.js';
import * as mobileSecurityCoder from '../../../qwen-plugin/agents/frontend-mobile-security-mobile-security-coder.js';
import * as apiDocumenter from '../../../qwen-plugin/agents/api-testing-observability-api-documenter.js';
import * as seoContentWriter from '../../../qwen-plugin/agents/seo-content-creation-seo-content-writer.js';
import * as seoContentPlanner from '../../../qwen-plugin/agents/seo-content-creation-seo-content-planner.js';
import * as seoContentAuditor from '../../../qwen-plugin/agents/seo-content-creation-seo-content-auditor.js';
import * as seoMetaOptimizer from '../../../qwen-plugin/agents/seo-technical-optimization-seo-meta-optimizer.js';
import * as seoKeywordStrategist from '../../../qwen-plugin/agents/seo-technical-optimization-seo-keyword-strategist.js';
import * as seoStructureArchitect from '../../../qwen-plugin/agents/seo-technical-optimization-seo-structure-architect.js';
import * as seoSnippetHunter from '../../../qwen-plugin/agents/seo-technical-optimization-seo-snippet-hunter.js';
import * as seoContentRefresher from '../../../qwen-plugin/agents/seo-analysis-monitoring-seo-content-refresher.js';
import * as seoCannibalizationDetector from '../../../qwen-plugin/agents/seo-analysis-monitoring-seo-cannibalization-detector.js';
import * as seoAuthorityBuilder from '../../../qwen-plugin/agents/seo-analysis-monitoring-seo-authority-builder.js';
import * as mermaidExpert from '../../../qwen-plugin/agents/documentation-generation-mermaid-expert.js';
import * as referenceBuilder from '../../../qwen-plugin/agents/documentation-generation-reference-builder.js';
import * as c4Code from '../../../qwen-plugin/agents/c4-architecture-c4-code.js';
import * as c4Component from '../../../qwen-plugin/agents/c4-architecture-c4-component.js';
import * as c4Container from '../../../qwen-plugin/agents/c4-architecture-c4-container.js';
import * as c4Context from '../../../qwen-plugin/agents/c4-architecture-c4-context.js';
import * as flutterExpert from '../../../qwen-plugin/agents/multi-platform-apps-flutter-expert.js';
import * as iosDeveloper from '../../../qwen-plugin/agents/multi-platform-apps-ios-developer.js';
import * as uiUxDesigner from '../../../qwen-plugin/agents/multi-platform-apps-ui-ux-designer.js';
import * as businessAnalyst from '../../../qwen-plugin/agents/business-analytics-business-analyst.js';
import * as hrPro from '../../../qwen-plugin/agents/hr-legal-compliance-hr-pro.js';
import * as legalAdvisor from '../../../qwen-plugin/agents/hr-legal-compliance-legal-advisor.js';
import * as customerSupport from '../../../qwen-plugin/agents/customer-sales-automation-customer-support.js';
import * as salesAutomator from '../../../qwen-plugin/agents/customer-sales-automation-sales-automator.js';
import * as contentMarketer from '../../../qwen-plugin/agents/content-marketing-content-marketer.js';
import * as searchSpecialist from '../../../qwen-plugin/agents/content-marketing-search-specialist.js';
import * as blockchainDeveloper from '../../../qwen-plugin/agents/blockchain-web3-blockchain-developer.js';
import * as quantAnalyst from '../../../qwen-plugin/agents/quantitative-trading-quant-analyst.js';
import * as riskManager from '../../../qwen-plugin/agents/quantitative-trading-risk-manager.js';
import * as paymentIntegration from '../../../qwen-plugin/agents/payment-processing-payment-integration.js';
import * as unityDeveloper from '../../../qwen-plugin/agents/game-development-unity-developer.js';
import * as minecraftBukkitPro from '../../../qwen-plugin/agents/game-development-minecraft-bukkit-pro.js';
import * as uiVisualValidator from '../../../qwen-plugin/agents/accessibility-compliance-ui-visual-validator.js';
import * as pythonPro from '../../../qwen-plugin/agents/python-development-python-pro.js';
import * as djangoPro from '../../../qwen-plugin/agents/python-development-django-pro.js';
import * as fastapiPro from '../../../qwen-plugin/agents/python-development-fastapi-pro.js';
import * as javascriptPro from '../../../qwen-plugin/agents/javascript-typescript-javascript-pro.js';
import * as typescriptPro from '../../../qwen-plugin/agents/javascript-typescript-typescript-pro.js';
import * as rustPro from '../../../qwen-plugin/agents/systems-programming-rust-pro.js';
import * as golangPro from '../../../qwen-plugin/agents/systems-programming-golang-pro.js';
import * as cPro from '../../../qwen-plugin/agents/systems-programming-c-pro.js';
import * as cppPro from '../../../qwen-plugin/agents/systems-programming-cpp-pro.js';
import * as javaPro from '../../../qwen-plugin/agents/jvm-languages-java-pro.js';
import * as scalaPro from '../../../qwen-plugin/agents/jvm-languages-scala-pro.js';
import * as csharpPro from '../../../qwen-plugin/agents/jvm-languages-csharp-pro.js';
import * as phpPro from '../../../qwen-plugin/agents/web-scripting-php-pro.js';
import * as rubyPro from '../../../qwen-plugin/agents/web-scripting-ruby-pro.js';
import * as elixirPro from '../../../qwen-plugin/agents/functional-programming-elixir-pro.js';
import * as juliaPro from '../../../qwen-plugin/agents/julia-development-julia-pro.js';
import * as armCortexExpert from '../../../qwen-plugin/agents/arm-cortex-microcontrollers-arm-cortex-expert.js';
import * as bashPro from '../../../qwen-plugin/agents/shell-scripting-bash-pro.js';
import * as posixShellPro from '../../../qwen-plugin/agents/shell-scripting-posix-shell-pro.js';

// Format agents as tools for Qwen's AI system
const agents = {
  'docs-architect': {
    ...docsArchitect.default || docsArchitect,
    name: 'docs-architect',
    description: 'Expert in documentation architecture, code explanation, and technical writing with automated doc generation and tutorial creation',
    input_schema: {
      type: 'object',
      properties: {
        task: {
          type: 'string',
          description: 'Documentation task to perform'
        }
      },
      required: ['task']
    }
  },
  'tutorial-engineer': {
    ...tutorialEngineer.default || tutorialEngineer,
    name: 'tutorial-engineer',
    description: 'Specialist in creating technical tutorials and educational content',
    input_schema: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'Topic for the tutorial'
        }
      },
      required: ['topic']
    }
  },
  'code-reviewer': {
    ...codeReviewer.default || codeReviewer,
    name: 'code-reviewer',
    description: 'Expert in code review, quality analysis, and best practices',
    input_schema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'Code to review'
        }
      },
      required: ['code']
    }
  },
  'debugger': {
    ...debuggerAgent.default || debuggerAgent,
    name: 'debugger',
    description: 'Expert in debugging, troubleshooting, and issue resolution',
    input_schema: {
      type: 'object',
      properties: {
        issue: {
          type: 'string',
          description: 'Debugging issue to resolve'
        }
      },
      required: ['issue']
    }
  },
  'dx-optimizer': {
    ...dxOptimizer.default || dxOptimizer,
    name: 'dx-optimizer',
    description: 'Specialist in developer experience optimization',
    input_schema: {
      type: 'object',
      properties: {
        dx_issue: {
          type: 'string',
          description: 'Developer experience issue to address'
        }
      },
      required: ['dx_issue']
    }
  },
  'backend-architect': {
    ...backendArchitect.default || backendArchitect,
    name: 'backend-architect',
    description: 'Expert in backend API design, GraphQL architecture, and microservices patterns',
    input_schema: {
      type: 'object',
      properties: {
        architecture_task: {
          type: 'string',
          description: 'Backend architecture task'
        }
      },
      required: ['architecture_task']
    }
  },
  'graphql-architect': {
    ...graphqlArchitect.default || graphqlArchitect,
    name: 'graphql-architect',
    description: 'Specialist in GraphQL API design and architecture',
    input_schema: {
      type: 'object',
      properties: {
        graphql_task: {
          type: 'string',
          description: 'GraphQL architecture task'
        }
      },
      required: ['graphql_task']
    }
  },
  'tdd-orchestrator': {
    ...tddOrchestrator.default || tddOrchestrator,
    name: 'tdd-orchestrator',
    description: 'Expert in Test-Driven Development workflows and practices',
    input_schema: {
      type: 'object',
      properties: {
        tdd_task: {
          type: 'string',
          description: 'TDD workflow task'
        }
      },
      required: ['tdd_task']
    }
  },
  'temporal-python-pro': {
    ...temporalPythonPro.default || temporalPythonPro,
    name: 'temporal-python-pro',
    description: 'Specialist in Temporal workflow orchestration with Python',
    input_schema: {
      type: 'object',
      properties: {
        temporal_task: {
          type: 'string',
          description: 'Temporal workflow task'
        }
      },
      required: ['temporal_task']
    }
  },
  'frontend-developer': {
    ...frontendDeveloper.default || frontendDeveloper,
    name: 'frontend-developer',
    description: 'Expert in frontend UI development and implementation',
    input_schema: {
      type: 'object',
      properties: {
        frontend_task: {
          type: 'string',
          description: 'Frontend development task'
        }
      },
      required: ['frontend_task']
    }
  },
  'mobile-developer': {
    ...mobileDeveloper.default || mobileDeveloper,
    name: 'mobile-developer',
    description: 'Specialist in mobile application development',
    input_schema: {
      type: 'object',
      properties: {
        mobile_task: {
          type: 'string',
          description: 'Mobile development task'
        }
      },
      required: ['mobile_task']
    }
  },
  'test-automator': {
    ...testAutomator.default || testAutomator,
    name: 'test-automator',
    description: 'Expert in automated testing for Python and JavaScript',
    input_schema: {
      type: 'object',
      properties: {
        test_task: {
          type: 'string',
          description: 'Testing automation task'
        }
      },
      required: ['test_task']
    }
  },
  'security-auditor': {
    ...securityAuditor.default || securityAuditor,
    name: 'security-auditor',
    description: 'Specialist in security auditing and vulnerability assessment',
    input_schema: {
      type: 'object',
      properties: {
        security_task: {
          type: 'string',
          description: 'Security audit task'
        }
      },
      required: ['security_task']
    }
  },
  'performance-engineer': {
    ...performanceEngineer.default || performanceEngineer,
    name: 'performance-engineer',
    description: 'Expert in application performance optimization',
    input_schema: {
      type: 'object',
      properties: {
        performance_task: {
          type: 'string',
          description: 'Performance optimization task'
        }
      },
      required: ['performance_task']
    }
  },
  'deployment-engineer': {
    ...deploymentEngineer.default || deploymentEngineer,
    name: 'deployment-engineer',
    description: 'Specialist in deployment strategies and rollout planning',
    input_schema: {
      type: 'object',
      properties: {
        deployment_task: {
          type: 'string',
          description: 'Deployment task'
        }
      },
      required: ['deployment_task']
    }
  },
  'ai-engineer': {
    ...aiEngineer.default || aiEngineer,
    name: 'ai-engineer',
    description: 'Expert in LLM application development and AI implementation',
    input_schema: {
      type: 'object',
      properties: {
        ai_task: {
          type: 'string',
          description: 'AI development task'
        }
      },
      required: ['ai_task']
    }
  },
  'prompt-engineer': {
    ...promptEngineer.default || promptEngineer,
    name: 'prompt-engineer',
    description: 'Specialist in prompt engineering and optimization',
    input_schema: {
      type: 'object',
      properties: {
        prompt_task: {
          type: 'string',
          description: 'Prompt engineering task'
        }
      },
      required: ['prompt_task']
    }
  },
  'context-manager': {
    ...contextManager.default || contextManager,
    name: 'context-manager',
    description: 'Expert in context persistence and long-running conversation management',
    input_schema: {
      type: 'object',
      properties: {
        context_task: {
          type: 'string',
          description: 'Context management task'
        }
      },
      required: ['context_task']
    }
  },
  'data-scientist': {
    ...dataScientist.default || dataScientist,
    name: 'data-scientist',
    description: 'Specialist in data science, machine learning, and analytics',
    input_schema: {
      type: 'object',
      properties: {
        data_task: {
          type: 'string',
          description: 'Data science task'
        }
      },
      required: ['data_task']
    }
  },
  'ml-engineer': {
    ...mlEngineer.default || mlEngineer,
    name: 'ml-engineer',
    description: 'Expert in machine learning model development and deployment',
    input_schema: {
      type: 'object',
      properties: {
        ml_task: {
          type: 'string',
          description: 'Machine learning task'
        }
      },
      required: ['ml_task']
    }
  },
  'mlops-engineer': {
    ...mlopsEngineer.default || mlopsEngineer,
    name: 'mlops-engineer',
    description: 'Specialist in ML operations and model deployment automation',
    input_schema: {
      type: 'object',
      properties: {
        mlops_task: {
          type: 'string',
          description: 'MLOps task'
        }
      },
      required: ['mlops_task']
    }
  },
  'data-engineer': {
    ...dataEngineer.default || dataEngineer,
    name: 'data-engineer',
    description: 'Expert in ETL pipeline construction and data processing',
    input_schema: {
      type: 'object',
      properties: {
        data_task: {
          type: 'string',
          description: 'Data engineering task'
        }
      },
      required: ['data_task']
    }
  },
  'incident-responder': {
    ...incidentResponder.default || incidentResponder,
    name: 'incident-responder',
    description: 'Specialist in production incident management and response',
    input_schema: {
      type: 'object',
      properties: {
        incident_task: {
          type: 'string',
          description: 'Incident response task'
        }
      },
      required: ['incident_task']
    }
  },
  'devops-troubleshooter': {
    ...devopsTroubleshooter.default || devopsTroubleshooter,
    name: 'devops-troubleshooter',
    description: 'Expert in DevOps troubleshooting and operations',
    input_schema: {
      type: 'object',
      properties: {
        devops_task: {
          type: 'string',
          description: 'DevOps troubleshooting task'
        }
      },
      required: ['devops_task']
    }
  },
  'error-detective': {
    ...errorDetective.default || errorDetective,
    name: 'error-detective',
    description: 'Specialist in error tracing and root cause analysis',
    input_schema: {
      type: 'object',
      properties: {
        error_task: {
          type: 'string',
          description: 'Error analysis task'
        }
      },
      required: ['error_task']
    }
  },
  'observability-engineer': {
    ...observabilityEngineer.default || observabilityEngineer,
    name: 'observability-engineer',
    description: 'Expert in metrics, logging, and distributed tracing',
    input_schema: {
      type: 'object',
      properties: {
        observability_task: {
          type: 'string',
          description: 'Observability task'
        }
      },
      required: ['observability_task']
    }
  },
  'database-optimizer': {
    ...databaseOptimizer.default || databaseOptimizer,
    name: 'database-optimizer',
    description: 'Specialist in database query optimization and performance',
    input_schema: {
      type: 'object',
      properties: {
        db_task: {
          type: 'string',
          description: 'Database optimization task'
        }
      },
      required: ['db_task']
    }
  },
  'network-engineer': {
    ...networkEngineer.default || networkEngineer,
    name: 'network-engineer',
    description: 'Expert in networking architecture and configuration',
    input_schema: {
      type: 'object',
      properties: {
        network_task: {
          type: 'string',
          description: 'Network engineering task'
        }
      },
      required: ['network_task']
    }
  },
  'kubernetes-architect': {
    ...kubernetesArchitect.default || kubernetesArchitect,
    name: 'kubernetes-architect',
    description: 'Specialist in Kubernetes architecture and orchestration',
    input_schema: {
      type: 'object',
      properties: {
        k8s_task: {
          type: 'string',
          description: 'Kubernetes task'
        }
      },
      required: ['k8s_task']
    }
  },
  'cloud-architect': {
    ...cloudArchitect.default || cloudArchitect,
    name: 'cloud-architect',
    description: 'Expert in cloud architecture design for AWS/Azure/GCP',
    input_schema: {
      type: 'object',
      properties: {
        cloud_task: {
          type: 'string',
          description: 'Cloud architecture task'
        }
      },
      required: ['cloud_task']
    }
  },
  'hybrid-cloud-architect': {
    ...hybridCloudArchitect.default || hybridCloudArchitect,
    name: 'hybrid-cloud-architect',
    description: 'Specialist in hybrid cloud architecture and networking',
    input_schema: {
      type: 'object',
      properties: {
        hybrid_task: {
          type: 'string',
          description: 'Hybrid cloud task'
        }
      },
      required: ['hybrid_task']
    }
  },
  'terraform-specialist': {
    ...terraformSpecialist.default || terraformSpecialist,
    name: 'terraform-specialist',
    description: 'Expert in Terraform infrastructure-as-code',
    input_schema: {
      type: 'object',
      properties: {
        terraform_task: {
          type: 'string',
          description: 'Terraform task'
        }
      },
      required: ['terraform_task']
    }
  },
  'legacy-modernizer': {
    ...legacyModernizer.default || legacyModernizer,
    name: 'legacy-modernizer',
    description: 'Specialist in codebase modernization and legacy system updates',
    input_schema: {
      type: 'object',
      properties: {
        modernization_task: {
          type: 'string',
          description: 'Modernization task'
        }
      },
      required: ['modernization_task']
    }
  },
  'architect-review': {
    ...architectReview.default || architectReview,
    name: 'architect-review',
    description: 'Expert in architectural review and design assessment',
    input_schema: {
      type: 'object',
      properties: {
        architecture_review: {
          type: 'string',
          description: 'Architecture to review'
        }
      },
      required: ['architecture_review']
    }
  },
  'database-architect': {
    ...databaseArchitect.default || databaseArchitect,
    name: 'database-architect',
    description: 'Specialist in database architecture and schema design',
    input_schema: {
      type: 'object',
      properties: {
        db_task: {
          type: 'string',
          description: 'Database architecture task'
        }
      },
      required: ['db_task']
    }
  },
  'sql-pro': {
    ...sqlPro.default || sqlPro,
    name: 'sql-pro',
    description: 'Expert in SQL optimization and database queries',
    input_schema: {
      type: 'object',
      properties: {
        sql_task: {
          type: 'string',
          description: 'SQL task'
        }
      },
      required: ['sql_task']
    }
  },
  'database-admin': {
    ...databaseAdmin.default || databaseAdmin,
    name: 'database-admin',
    description: 'Specialist in database administration and operations',
    input_schema: {
      type: 'object',
      properties: {
        db_admin_task: {
          type: 'string',
          description: 'Database administration task'
        }
      },
      required: ['db_admin_task']
    }
  },
  'backend-security-coder': {
    ...backendSecurityCoder.default || backendSecurityCoder,
    name: 'backend-security-coder',
    description: 'Expert in backend security implementation and best practices',
    input_schema: {
      type: 'object',
      properties: {
        security_task: {
          type: 'string',
          description: 'Backend security task'
        }
      },
      required: ['security_task']
    }
  },
  'frontend-security-coder': {
    ...frontendSecurityCoder.default || frontendSecurityCoder,
    name: 'frontend-security-coder',
    description: 'Specialist in frontend security implementation',
    input_schema: {
      type: 'object',
      properties: {
        security_task: {
          type: 'string',
          description: 'Frontend security task'
        }
      },
      required: ['security_task']
    }
  },
  'mobile-security-coder': {
    ...mobileSecurityCoder.default || mobileSecurityCoder,
    name: 'mobile-security-coder',
    description: 'Expert in mobile application security',
    input_schema: {
      type: 'object',
      properties: {
        security_task: {
          type: 'string',
          description: 'Mobile security task'
        }
      },
      required: ['security_task']
    }
  },
  'api-documenter': {
    ...apiDocumenter.default || apiDocumenter,
    name: 'api-documenter',
    description: 'Specialist in API documentation and specification generation',
    input_schema: {
      type: 'object',
      properties: {
        api_task: {
          type: 'string',
          description: 'API documentation task'
        }
      },
      required: ['api_task']
    }
  },
  'seo-content-writer': {
    ...seoContentWriter.default || seoContentWriter,
    name: 'seo-content-writer',
    description: 'Expert in SEO content writing and optimization',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'SEO content task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-content-planner': {
    ...seoContentPlanner.default || seoContentPlanner,
    name: 'seo-content-planner',
    description: 'Specialist in SEO content planning and strategy',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'SEO content planning task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-content-auditor': {
    ...seoContentAuditor.default || seoContentAuditor,
    name: 'seo-content-auditor',
    description: 'Expert in SEO content auditing and quality assessment',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'SEO content audit task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-meta-optimizer': {
    ...seoMetaOptimizer.default || seoMetaOptimizer,
    name: 'seo-meta-optimizer',
    description: 'Specialist in technical SEO optimization',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'Technical SEO task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-keyword-strategist': {
    ...seoKeywordStrategist.default || seoKeywordStrategist,
    name: 'seo-keyword-strategist',
    description: 'Expert in SEO keyword strategy and research',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'SEO keyword strategy task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-structure-architect': {
    ...seoStructureArchitect.default || seoStructureArchitect,
    name: 'seo-structure-architect',
    description: 'Specialist in SEO site structure and architecture',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'SEO structure task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-snippet-hunter': {
    ...seoSnippetHunter.default || seoSnippetHunter,
    name: 'seo-snippet-hunter',
    description: 'Expert in featured snippet optimization',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'Featured snippet optimization task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-content-refresher': {
    ...seoContentRefresher.default || seoContentRefresher,
    name: 'seo-content-refresher',
    description: 'Specialist in content freshness analysis and updates',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'Content freshness task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-cannibalization-detector': {
    ...seoCannibalizationDetector.default || seoCannibalizationDetector,
    name: 'seo-cannibalization-detector',
    description: 'Expert in content cannibalization detection',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'Content cannibalization task'
        }
      },
      required: ['seo_task']
    }
  },
  'seo-authority-builder': {
    ...seoAuthorityBuilder.default || seoAuthorityBuilder,
    name: 'seo-authority-builder',
    description: 'Specialist in authority building and E-E-A-T optimization',
    input_schema: {
      type: 'object',
      properties: {
        seo_task: {
          type: 'string',
          description: 'Authority building task'
        }
      },
      required: ['seo_task']
    }
  },
  'mermaid-expert': {
    ...mermaidExpert.default || mermaidExpert,
    name: 'mermaid-expert',
    description: 'Expert in Mermaid diagram creation and visualization',
    input_schema: {
      type: 'object',
      properties: {
        diagram_task: {
          type: 'string',
          description: 'Mermaid diagram task'
        }
      },
      required: ['diagram_task']
    }
  },
  'reference-builder': {
    ...referenceBuilder.default || referenceBuilder,
    name: 'reference-builder',
    description: 'Specialist in API reference and documentation building',
    input_schema: {
      type: 'object',
      properties: {
        reference_task: {
          type: 'string',
          description: 'Reference documentation task'
        }
      },
      required: ['reference_task']
    }
  },
  'c4-code': {
    ...c4Code.default || c4Code,
    name: 'c4-code',
    description: 'Expert in C4 architecture documentation from code analysis',
    input_schema: {
      type: 'object',
      properties: {
        c4_task: {
          type: 'string',
          description: 'C4 architecture task'
        }
      },
      required: ['c4_task']
    }
  },
  'c4-component': {
    ...c4Component.default || c4Component,
    name: 'c4-component',
    description: 'Specialist in C4 component diagram creation',
    input_schema: {
      type: 'object',
      properties: {
        c4_task: {
          type: 'string',
          description: 'C4 component task'
        }
      },
      required: ['c4_task']
    }
  },
  'c4-container': {
    ...c4Container.default || c4Container,
    name: 'c4-container',
    description: 'Expert in C4 container diagram creation',
    input_schema: {
      type: 'object',
      properties: {
        c4_task: {
          type: 'string',
          description: 'C4 container task'
        }
      },
      required: ['c4_task']
    }
  },
  'c4-context': {
    ...c4Context.default || c4Context,
    name: 'c4-context',
    description: 'Specialist in C4 context diagram creation',
    input_schema: {
      type: 'object',
      properties: {
        c4_task: {
          type: 'string',
          description: 'C4 context task'
        }
      },
      required: ['c4_task']
    }
  },
  'flutter-expert': {
    ...flutterExpert.default || flutterExpert,
    name: 'flutter-expert',
    description: 'Expert in Flutter mobile application development',
    input_schema: {
      type: 'object',
      properties: {
        flutter_task: {
          type: 'string',
          description: 'Flutter development task'
        }
      },
      required: ['flutter_task']
    }
  },
  'ios-developer': {
    ...iosDeveloper.default || iosDeveloper,
    name: 'ios-developer',
    description: 'Specialist in iOS application development',
    input_schema: {
      type: 'object',
      properties: {
        ios_task: {
          type: 'string',
          description: 'iOS development task'
        }
      },
      required: ['ios_task']
    }
  },
  'ui-ux-designer': {
    ...uiUxDesigner.default || uiUxDesigner,
    name: 'ui-ux-designer',
    description: 'Expert in UI/UX design and user experience optimization',
    input_schema: {
      type: 'object',
      properties: {
        design_task: {
          type: 'string',
          description: 'UI/UX design task'
        }
      },
      required: ['design_task']
    }
  },
  'business-analyst': {
    ...businessAnalyst.default || businessAnalyst,
    name: 'business-analyst',
    description: 'Specialist in business analytics and metrics analysis',
    input_schema: {
      type: 'object',
      properties: {
        business_task: {
          type: 'string',
          description: 'Business analysis task'
        }
      },
      required: ['business_task']
    }
  },
  'hr-pro': {
    ...hrPro.default || hrPro,
    name: 'hr-pro',
    description: 'Expert in HR policy documentation and compliance',
    input_schema: {
      type: 'object',
      properties: {
        hr_task: {
          type: 'string',
          description: 'HR policy task'
        }
      },
      required: ['hr_task']
    }
  },
  'legal-advisor': {
    ...legalAdvisor.default || legalAdvisor,
    name: 'legal-advisor',
    description: 'Specialist in legal compliance and documentation',
    input_schema: {
      type: 'object',
      properties: {
        legal_task: {
          type: 'string',
          description: 'Legal compliance task'
        }
      },
      required: ['legal_task']
    }
  },
  'customer-support': {
    ...customerSupport.default || customerSupport,
    name: 'customer-support',
    description: 'Expert in customer support workflow automation',
    input_schema: {
      type: 'object',
      properties: {
        support_task: {
          type: 'string',
          description: 'Customer support task'
        }
      },
      required: ['support_task']
    }
  },
  'sales-automator': {
    ...salesAutomator.default || salesAutomator,
    name: 'sales-automator',
    description: 'Specialist in sales pipeline management and automation',
    input_schema: {
      type: 'object',
      properties: {
        sales_task: {
          type: 'string',
          description: 'Sales automation task'
        }
      },
      required: ['sales_task']
    }
  },
  'content-marketer': {
    ...contentMarketer.default || contentMarketer,
    name: 'content-marketer',
    description: 'Expert in content marketing strategy and execution',
    input_schema: {
      type: 'object',
      properties: {
        marketing_task: {
          type: 'string',
          description: 'Content marketing task'
        }
      },
      required: ['marketing_task']
    }
  },
  'search-specialist': {
    ...searchSpecialist.default || searchSpecialist,
    name: 'search-specialist',
    description: 'Specialist in web research and information synthesis',
    input_schema: {
      type: 'object',
      properties: {
        research_task: {
          type: 'string',
          description: 'Research task'
        }
      },
      required: ['research_task']
    }
  },
  'blockchain-developer': {
    ...blockchainDeveloper.default || blockchainDeveloper,
    name: 'blockchain-developer',
    description: 'Expert in smart contract development and Web3 applications',
    input_schema: {
      type: 'object',
      properties: {
        blockchain_task: {
          type: 'string',
          description: 'Blockchain development task'
        }
      },
      required: ['blockchain_task']
    }
  },
  'quant-analyst': {
    ...quantAnalyst.default || quantAnalyst,
    name: 'quant-analyst',
    description: 'Specialist in quantitative analysis and algorithmic trading',
    input_schema: {
      type: 'object',
      properties: {
        quant_task: {
          type: 'string',
          description: 'Quantitative analysis task'
        }
      },
      required: ['quant_task']
    }
  },
  'risk-manager': {
    ...riskManager.default || riskManager,
    name: 'risk-manager',
    description: 'Expert in financial risk management and analysis',
    input_schema: {
      type: 'object',
      properties: {
        risk_task: {
          type: 'string',
          description: 'Risk management task'
        }
      },
      required: ['risk_task']
    }
  },
  'payment-integration': {
    ...paymentIntegration.default || paymentIntegration,
    name: 'payment-integration',
    description: 'Specialist in payment gateway integration and billing',
    input_schema: {
      type: 'object',
      properties: {
        payment_task: {
          type: 'string',
          description: 'Payment integration task'
        }
      },
      required: ['payment_task']
    }
  },
  'unity-developer': {
    ...unityDeveloper.default || unityDeveloper,
    name: 'unity-developer',
    description: 'Expert in Unity game development with C# scripting',
    input_schema: {
      type: 'object',
      properties: {
        game_task: {
          type: 'string',
          description: 'Unity game development task'
        }
      },
      required: ['game_task']
    }
  },
  'minecraft-bukkit-pro': {
    ...minecraftBukkitPro.default || minecraftBukkitPro,
    name: 'minecraft-bukkit-pro',
    description: 'Specialist in Minecraft server plugin development',
    input_schema: {
      type: 'object',
      properties: {
        minecraft_task: {
          type: 'string',
          description: 'Minecraft plugin development task'
        }
      },
      required: ['minecraft_task']
    }
  },
  'ui-visual-validator': {
    ...uiVisualValidator.default || uiVisualValidator,
    name: 'ui-visual-validator',
    description: 'Expert in accessibility compliance and UI validation',
    input_schema: {
      type: 'object',
      properties: {
        accessibility_task: {
          type: 'string',
          description: 'Accessibility validation task'
        }
      },
      required: ['accessibility_task']
    }
  },
  'python-pro': {
    ...pythonPro.default || pythonPro,
    name: 'python-pro',
    description: 'Expert in modern Python development with best practices',
    input_schema: {
      type: 'object',
      properties: {
        python_task: {
          type: 'string',
          description: 'Python development task'
        }
      },
      required: ['python_task']
    }
  },
  'django-pro': {
    ...djangoPro.default || djangoPro,
    name: 'django-pro',
    description: 'Specialist in Django framework development',
    input_schema: {
      type: 'object',
      properties: {
        django_task: {
          type: 'string',
          description: 'Django development task'
        }
      },
      required: ['django_task']
    }
  },
  'fastapi-pro': {
    ...fastapiPro.default || fastapiPro,
    name: 'fastapi-pro',
    description: 'Expert in FastAPI framework development',
    input_schema: {
      type: 'object',
      properties: {
        fastapi_task: {
          type: 'string',
          description: 'FastAPI development task'
        }
      },
      required: ['fastapi_task']
    }
  },
  'javascript-pro': {
    ...javascriptPro.default || javascriptPro,
    name: 'javascript-pro',
    description: 'Specialist in JavaScript development and best practices',
    input_schema: {
      type: 'object',
      properties: {
        js_task: {
          type: 'string',
          description: 'JavaScript development task'
        }
      },
      required: ['js_task']
    }
  },
  'typescript-pro': {
    ...typescriptPro.default || typescriptPro,
    name: 'typescript-pro',
    description: 'Expert in TypeScript development and advanced patterns',
    input_schema: {
      type: 'object',
      properties: {
        ts_task: {
          type: 'string',
          description: 'TypeScript development task'
        }
      },
      required: ['ts_task']
    }
  },
  'rust-pro': {
    ...rustPro.default || rustPro,
    name: 'rust-pro',
    description: 'Specialist in Rust systems programming',
    input_schema: {
      type: 'object',
      properties: {
        rust_task: {
          type: 'string',
          description: 'Rust development task'
        }
      },
      required: ['rust_task']
    }
  },
  'golang-pro': {
    ...golangPro.default || golangPro,
    name: 'golang-pro',
    description: 'Expert in Go programming and systems development',
    input_schema: {
      type: 'object',
      properties: {
        go_task: {
          type: 'string',
          description: 'Go development task'
        }
      },
      required: ['go_task']
    }
  },
  'c-pro': {
    ...cPro.default || cPro,
    name: 'c-pro',
    description: 'Specialist in C programming and systems development',
    input_schema: {
      type: 'object',
      properties: {
        c_task: {
          type: 'string',
          description: 'C development task'
        }
      },
      required: ['c_task']
    }
  },
  'cpp-pro': {
    ...cppPro.default || cppPro,
    name: 'cpp-pro',
    description: 'Expert in C++ programming and systems development',
    input_schema: {
      type: 'object',
      properties: {
        cpp_task: {
          type: 'string',
          description: 'C++ development task'
        }
      },
      required: ['cpp_task']
    }
  },
  'java-pro': {
    ...javaPro.default || javaPro,
    name: 'java-pro',
    description: 'Specialist in Java enterprise development',
    input_schema: {
      type: 'object',
      properties: {
        java_task: {
          type: 'string',
          description: 'Java development task'
        }
      },
      required: ['java_task']
    }
  },
  'scala-pro': {
    ...scalaPro.default || scalaPro,
    name: 'scala-pro',
    description: 'Expert in Scala functional programming',
    input_schema: {
      type: 'object',
      properties: {
        scala_task: {
          type: 'string',
          description: 'Scala development task'
        }
      },
      required: ['scala_task']
    }
  },
  'csharp-pro': {
    ...csharpPro.default || csharpPro,
    name: 'csharp-pro',
    description: 'Specialist in C# .NET development',
    input_schema: {
      type: 'object',
      properties: {
        csharp_task: {
          type: 'string',
          description: 'C# development task'
        }
      },
      required: ['csharp_task']
    }
  },
  'php-pro': {
    ...phpPro.default || phpPro,
    name: 'php-pro',
    description: 'Expert in PHP web development',
    input_schema: {
      type: 'object',
      properties: {
        php_task: {
          type: 'string',
          description: 'PHP development task'
        }
      },
      required: ['php_task']
    }
  },
  'ruby-pro': {
    ...rubyPro.default || rubyPro,
    name: 'ruby-pro',
    description: 'Specialist in Ruby and Rails development',
    input_schema: {
      type: 'object',
      properties: {
        ruby_task: {
          type: 'string',
          description: 'Ruby development task'
        }
      },
      required: ['ruby_task']
    }
  },
  'elixir-pro': {
    ...elixirPro.default || elixirPro,
    name: 'elixir-pro',
    description: 'Expert in Elixir functional programming and OTP',
    input_schema: {
      type: 'object',
      properties: {
        elixir_task: {
          type: 'string',
          description: 'Elixir development task'
        }
      },
      required: ['elixir_task']
    }
  },
  'julia-pro': {
    ...juliaPro.default || juliaPro,
    name: 'julia-pro',
    description: 'Specialist in Julia numerical computing',
    input_schema: {
      type: 'object',
      properties: {
        julia_task: {
          type: 'string',
          description: 'Julia development task'
        }
      },
      required: ['julia_task']
    }
  },
  'arm-cortex-expert': {
    ...armCortexExpert.default || armCortexExpert,
    name: 'arm-cortex-expert',
    description: 'Expert in ARM Cortex-M firmware development',
    input_schema: {
      type: 'object',
      properties: {
        embedded_task: {
          type: 'string',
          description: 'Embedded development task'
        }
      },
      required: ['embedded_task']
    }
  },
  'bash-pro': {
    ...bashPro.default || bashPro,
    name: 'bash-pro',
    description: 'Specialist in Bash scripting and automation',
    input_schema: {
      type: 'object',
      properties: {
        bash_task: {
          type: 'string',
          description: 'Bash scripting task'
        }
      },
      required: ['bash_task']
    }
  },
  'posix-shell-pro': {
    ...posixShellPro.default || posixShellPro,
    name: 'posix-shell-pro',
    description: 'Expert in POSIX shell scripting with defensive programming',
    input_schema: {
      type: 'object',
      properties: {
        shell_task: {
          type: 'string',
          description: 'Shell scripting task'
        }
      },
      required: ['shell_task']
    }
  }
};

export default agents;