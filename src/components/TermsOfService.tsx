// src/pages/TermsOfService.tsx
import React from 'react'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Terms of Service</h1>
        <p className="text-slate-400">Last updated: January 2025</p>
      </div>

      <div className="prose prose-slate prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🤝 Agreement to Terms</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            By accessing and using LIMINAL's AI infrastructure platform, you accept and agree to be bound by the 
            terms and provision of this agreement. These Terms of Service govern your use of our platform and services.
          </p>
          <div className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 rounded-lg p-4 mb-4">
            <p className="text-cyan-400 font-medium">
              ⚡ By using LIMINAL, you acknowledge that you have read, understood, and agree to these terms.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🚀 Service Description</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            LIMINAL provides next-generation AI infrastructure services including:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">⚡ Lightning Deploy</h4>
              <p className="text-slate-300 text-sm">Deploy AI models in seconds with quantum-optimized infrastructure</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">🛡️ Fortress Security</h4>
              <p className="text-slate-300 text-sm">Military-grade encryption and AI-powered threat detection</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">💎 Crystal Scaling</h4>
              <p className="text-slate-300 text-sm">Seamless scaling with adaptive resource allocation</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">🎯 Precision Analytics</h4>
              <p className="text-slate-300 text-sm">Real-time monitoring and predictive optimization</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">👤 User Responsibilities</h2>
          <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-medium text-pink-400 mb-3">You agree to:</h3>
            <ul className="text-slate-300 space-y-2">
              <li>✅ Provide accurate and complete information</li>
              <li>✅ Maintain the security of your account credentials</li>
              <li>✅ Use our services in compliance with applicable laws</li>
              <li>✅ Respect intellectual property rights</li>
              <li>✅ Not interfere with or disrupt our services</li>
              <li>✅ Not use our platform for illegal or unauthorized purposes</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">💳 Billing and Payment</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">Beta Access</h4>
              <p className="text-slate-300 text-sm">
                Current beta access is provided free of charge. Future pricing will be communicated 30 days in advance.
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">Payment Terms</h4>
              <p className="text-slate-300 text-sm">
                All fees are due in advance. Subscription services are billed monthly or annually as selected.
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">Refund Policy</h4>
              <p className="text-slate-300 text-sm">
                Refunds are available within 30 days of purchase for unused services, subject to our refund policy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">📊 Service Level Agreement</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-slate-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">15x</div>
              <div className="text-slate-300 text-sm">Faster Performance</div>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300 text-sm">Technical Support</div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🚫 Prohibited Uses</h2>
          <p className="text-slate-300 leading-relaxed mb-4">You may not use our platform for:</p>
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-4">
            <ul className="text-slate-300 space-y-2">
              <li>❌ Illegal activities or content</li>
              <li>❌ Spam, phishing, or malicious software</li>
              <li>❌ Violating others' privacy or rights</li>
              <li>❌ Reverse engineering our technology</li>
              <li>❌ Unauthorized access attempts</li>
              <li>❌ Harmful or offensive content</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">📝 Intellectual Property</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">Our Rights</h4>
              <p className="text-slate-300 text-sm">
                LIMINAL and our technology, including all software, algorithms, and documentation, 
                are protected by intellectual property laws and remain our exclusive property.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-medium mb-2">Your Content</h4>
              <p className="text-slate-300 text-sm">
                You retain ownership of your data and models. We only access your content as necessary 
                to provide our services and with your explicit permission.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">⚠️ Disclaimer of Warranties</h2>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-4">
            <p className="text-slate-300 leading-relaxed">
              Our services are provided "AS IS" without warranties of any kind. While we strive for 
              excellence, we cannot guarantee uninterrupted or error-free service. Users assume 
              responsibility for their use of our platform.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🛡️ Limitation of Liability</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            To the maximum extent permitted by law, LIMINAL shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages arising from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🔄 Termination</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-pink-400 font-medium mb-2">By You</h4>
              <p className="text-slate-300 text-sm">
                You may terminate your account at any time through your account settings or by contacting support.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-pink-400 font-medium mb-2">By Us</h4>
              <p className="text-slate-300 text-sm">
                We may suspend or terminate accounts that violate these terms, with appropriate notice when possible.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">📧 Contact Information</h2>
          <div className="bg-gradient-to-r from-cyan-900/30 to-pink-900/30 rounded-lg p-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-slate-300">
              <p>📧 Email: legal@liminal.ai</p>
              <p>📍 Address: LIMINAL Technologies, AI District, Future City</p>
              <p>⚡ Response time: Within 24 hours</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🔄 Changes to Terms</h2>
          <p className="text-slate-300 leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective 
            immediately upon posting. Your continued use of our services constitutes acceptance of any modifications. 
            We recommend reviewing these terms periodically.
          </p>
        </section>
      </div>
    </div>
  )
}