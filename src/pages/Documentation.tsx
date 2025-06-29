// src/pages/Documentation.tsx
import React, { useState } from 'react'

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('getting-started')

  const sections = [
    { id: 'getting-started', title: '🚀 Getting Started', icon: '🚀' },
    { id: 'api-reference', title: '📚 API Reference', icon: '📚' },
    { id: 'deployment', title: '⚡ Deployment', icon: '⚡' },
    { id: 'security', title: '🛡️ Security', icon: '🛡️' },
    { id: 'examples', title: '💡 Examples', icon: '💡' },
    { id: 'troubleshooting', title: '🔧 Troubleshooting', icon: '🔧' }
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Documentation</h1>
          <p className="text-slate-400 text-lg">
            Everything you need to build with LIMINAL's AI infrastructure platform
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/30 rounded-lg p-8">
              {activeSection === 'getting-started' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">🚀 Getting Started</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 rounded-lg p-6 border border-cyan-500/30">
                      <h3 className="text-xl font-semibold text-cyan-400 mb-3">Quick Start</h3>
                      <p className="text-slate-300 mb-4">
                        Get up and running with LIMINAL in under 5 minutes. Deploy your first AI model with our quantum-optimized infrastructure.
                      </p>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          <div># Install LIMINAL CLI</div>
                          <div>npm install -g @liminal/cli</div>
                          <div className="mt-2"># Authenticate</div>
                          <div>liminal auth login</div>
                          <div className="mt-2"># Deploy your model</div>
                          <div>liminal deploy ./my-model</div>
                        </code>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-pink-400 mb-3">📋 Prerequisites</h4>
                        <ul className="text-slate-300 space-y-2 text-sm">
                          <li>• Node.js 18+ or Python 3.8+</li>
                          <li>• LIMINAL account (beta access)</li>
                          <li>• Basic knowledge of AI/ML</li>
                          <li>• Command line familiarity</li>
                        </ul>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-pink-400 mb-3">⚡ Key Features</h4>
                        <ul className="text-slate-300 space-y-2 text-sm">
                          <li>• 12-second deployments</li>
                          <li>• 99.99% uptime guarantee</li>
                          <li>• Auto-scaling infrastructure</li>
                          <li>• Real-time monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'api-reference' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">📚 API Reference</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Authentication</h3>
                      <p className="text-slate-300 mb-4">All API requests require authentication using your API key.</p>
                      <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                        <code className="text-green-400 text-sm">
                          <div>curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                          <div>     -H "Content-Type: application/json" \</div>
                          <div>     https://api.liminal.ai/v1/models</div>
                        </code>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-pink-400 mb-3">Deploy Model</h4>
                        <p className="text-slate-300 text-sm mb-3">POST /v1/models/deploy</p>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            <div>{"{"}</div>
                            <div>  "name": "my-model",</div>
                            <div>  "framework": "pytorch",</div>
                            <div>  "version": "1.0.0",</div>
                            <div>  "config": {"{"}</div>
                            <div>    "instances": 2,</div>
                            <div>    "memory": "4GB"</div>
                            <div>  {"}"}</div>
                            <div>{"}"}</div>
                          </code>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-pink-400 mb-3">Model Inference</h4>
                        <p className="text-slate-300 text-sm mb-3">POST /v1/models/{`{model_id}`}/predict</p>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            <div>{"{"}</div>
                            <div>  "inputs": [</div>
                            <div>    {"{"}"data": "base64_encoded_input"{"}"}</div>
                            <div>  ],</div>
                            <div>  "parameters": {"{"}</div>
                            <div>    "temperature": 0.7</div>
                            <div>  {"}"}</div>
                            <div>{"}"}</div>
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'deployment' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">⚡ Deployment Guide</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/30">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">Lightning Deploy</h3>
                      <p className="text-slate-300 mb-4">
                        Deploy AI models in seconds with our quantum-optimized infrastructure.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-cyan-400 mb-3">🐳 Docker Deployment</h4>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            <div># Build your model</div>
                            <div>docker build -t my-model .</div>
                            <div className="mt-2"># Push to LIMINAL registry</div>
                            <div>liminal push my-model:latest</div>
                            <div className="mt-2"># Deploy</div>
                            <div>liminal deploy my-model:latest</div>
                          </code>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-cyan-400 mb-3">🐍 Python Deployment</h4>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            <div>from liminal import deploy</div>
                            <div className="mt-2">result = deploy(</div>
                            <div>    model=my_model,</div>
                            <div>    name="my-model",</div>
                            <div>    config={"{"}"instances": 2{"}"}</div>
                            <div>)</div>
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'security' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">🛡️ Security</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-6 border border-green-500/30">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">Fortress Security</h3>
                      <p className="text-slate-300">
                        Military-grade encryption and AI-powered threat detection keep your models and data secure.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-blue-400 mb-3">🔒 Encryption</h4>
                        <ul className="text-slate-300 space-y-2 text-sm">
                          <li>• AES-256 encryption at rest</li>
                          <li>• TLS 1.3 for data in transit</li>
                          <li>• End-to-end encryption</li>
                          <li>• Hardware security modules</li>
                        </ul>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-blue-400 mb-3">🔐 Access Control</h4>
                        <ul className="text-slate-300 space-y-2 text-sm">
                          <li>• Multi-factor authentication</li>
                          <li>• Role-based permissions</li>
                          <li>• API key management</li>
                          <li>• Audit logging</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-green-400 mb-3">🏆 Compliance</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                          <div className="text-2xl mb-2">🏅</div>
                          <div className="text-slate-300 font-medium">SOC 2 Type II</div>
                        </div>
                        <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                          <div className="text-2xl mb-2">🌍</div>
                          <div className="text-slate-300 font-medium">ISO 27001</div>
                        </div>
                        <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                          <div className="text-2xl mb-2">🔒</div>
                          <div className="text-slate-300 font-medium">GDPR Ready</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'examples' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">💡 Examples</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">🤖 Chat Bot Deployment</h3>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          <div>import liminal</div>
                          <div>from transformers import AutoModel</div>
                          <div className="mt-2"># Load your model</div>
                          <div>model = AutoModel.from_pretrained("gpt-3.5-turbo")</div>
                          <div className="mt-2"># Deploy to LIMINAL</div>
                          <div>deployment = liminal.deploy(</div>
                          <div>    model=model,</div>
                          <div>    name="chatbot-v1",</div>
                          <div>    endpoint="/chat",</div>
                          <div>    scaling={"{"}"min": 1, "max": 10{"}"}</div>
                          <div>)</div>
                          <div className="mt-2">print(f"Deployed at: {"{deployment.url}"}")</div>
                        </code>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">🖼️ Image Classification</h3>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          <div>import requests</div>
                          <div>import base64</div>
                          <div className="mt-2"># Prepare image</div>
                          <div>with open("image.jpg", "rb") as f:</div>
                          <div>    image_data = base64.b64encode(f.read())</div>
                          <div className="mt-2"># Make prediction</div>
                          <div>response = requests.post(</div>
                          <div>    "https://api.liminal.ai/v1/models/classifier/predict",</div>
                          <div>    headers={"{"}"Authorization": "Bearer YOUR_KEY"{"}"},</div>
                          <div>    json={"{"}"inputs": [{"{"}"data": image_data{"}"}]{"}"})</div>
                          <div className="mt-2">result = response.json()</div>
                          <div>print(f"Prediction: {"{result['predictions'][0]}"}")</div>
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'troubleshooting' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">🔧 Troubleshooting</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-red-400 mb-3">Common Issues</h3>
                      <p className="text-slate-300">
                        Solutions to the most frequently encountered problems.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-orange-400 mb-3">❌ Deployment Failed</h4>
                        <p className="text-slate-300 mb-3 text-sm">
                          If your deployment fails, check the following:
                        </p>
                        <ul className="text-slate-300 space-y-1 text-sm">
                          <li>• Verify your API key is valid</li>
                          <li>• Check model size limits (max 10GB)</li>
                          <li>• Ensure Docker image is accessible</li>
                          <li>• Review deployment logs: <code className="text-green-400">liminal logs deployment-id</code></li>
                        </ul>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-orange-400 mb-3">⏱️ Slow Response Times</h4>
                        <p className="text-slate-300 mb-3 text-sm">
                          To improve performance:
                        </p>
                        <ul className="text-slate-300 space-y-1 text-sm">
                          <li>• Enable auto-scaling</li>
                          <li>• Use batch predictions</li>
                          <li>• Optimize model size</li>
                          <li>• Check network latency</li>
                        </ul>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-orange-400 mb-3">🔑 Authentication Errors</h4>
                        <p className="text-slate-300 mb-3 text-sm">
                          Authentication issues can be resolved by:
                        </p>
                        <ul className="text-slate-300 space-y-1 text-sm">
                          <li>• Regenerating your API key</li>
                          <li>• Checking key permissions</li>
                          <li>• Verifying request headers</li>
                          <li>• Ensuring key isn't expired</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">📞 Need More Help?</h3>
                      <p className="text-slate-300 mb-4">
                        Can't find what you're looking for? Our support team is here to help 24/7.
                      </p>
                      <div className="flex gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                          Contact Support
                        </button>
                        <button className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-4 py-2 rounded-lg transition-colors">
                          Join Discord
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}