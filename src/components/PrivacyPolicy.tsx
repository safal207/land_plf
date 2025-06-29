// src/pages/PrivacyPolicy.tsx
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Privacy Policy</h1>
        <p className="text-slate-400">Last updated: January 2025</p>
      </div>

      <div className="prose prose-slate prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🔒 Your Privacy Matters</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            At LIMINAL, we understand that your privacy is paramount. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our AI infrastructure platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">📊 Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-cyan-400 mb-3">Personal Information</h3>
          <ul className="text-slate-300 space-y-2 mb-4">
            <li>• Email address (for beta access and communications)</li>
            <li>• Name and contact information (when provided)</li>
            <li>• Company information (for business accounts)</li>
            <li>• Usage data and analytics</li>
          </ul>

          <h3 className="text-xl font-medium text-cyan-400 mb-3">Technical Information</h3>
          <ul className="text-slate-300 space-y-2 mb-4">
            <li>• IP address and location data</li>
            <li>• Browser type and version</li>
            <li>• Device information</li>
            <li>• Log files and usage patterns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🛡️ How We Use Your Information</h2>
          <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
            <ul className="text-slate-300 space-y-2">
              <li>✨ Provide and maintain our AI infrastructure services</li>
              <li>🚀 Send important updates about beta access and new features</li>
              <li>📈 Analyze usage patterns to improve our platform</li>
              <li>🔧 Provide technical support and customer service</li>
              <li>🛡️ Ensure security and prevent fraud</li>
              <li>📧 Send marketing communications (with your consent)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🤝 Information Sharing</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except in the following circumstances:
          </p>
          <ul className="text-slate-300 space-y-2 mb-4">
            <li>• Service providers who assist in our operations</li>
            <li>• Legal compliance and law enforcement requests</li>
            <li>• Business transfers (mergers, acquisitions)</li>
            <li>• Protection of rights and safety</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🍪 Cookies and Tracking</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your experience:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-pink-400 font-medium mb-2">Essential Cookies</h4>
              <p className="text-slate-300 text-sm">Required for basic site functionality</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-pink-400 font-medium mb-2">Analytics Cookies</h4>
              <p className="text-slate-300 text-sm">Help us understand how you use our site</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🔐 Data Security</h2>
          <div className="bg-gradient-to-r from-cyan-900/30 to-pink-900/30 rounded-lg p-6 mb-4">
            <p className="text-slate-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="text-slate-300 space-y-2">
              <li>🔒 SSL/TLS encryption for data transmission</li>
              <li>🛡️ Regular security audits and monitoring</li>
              <li>⚡ Access controls and authentication</li>
              <li>💾 Secure data storage and backup procedures</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">👤 Your Rights</h2>
          <p className="text-slate-300 leading-relaxed mb-4">You have the right to:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center text-slate-300">
                <span className="text-cyan-400 mr-2">•</span>
                Access your personal data
              </div>
              <div className="flex items-center text-slate-300">
                <span className="text-cyan-400 mr-2">•</span>
                Correct inaccurate information
              </div>
              <div className="flex items-center text-slate-300">
                <span className="text-cyan-400 mr-2">•</span>
                Delete your personal data
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-slate-300">
                <span className="text-cyan-400 mr-2">•</span>
                Opt-out of marketing communications
              </div>
              <div className="flex items-center text-slate-300">
                <span className="text-cyan-400 mr-2">•</span>
                Data portability
              </div>
              <div className="flex items-center text-slate-300">
                <span className="text-cyan-400 mr-2">•</span>
                Object to data processing
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">📧 Contact Us</h2>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-slate-300">
              <p>📧 Email: privacy@liminal.ai</p>
              <p>📍 Address: LIMINAL Technologies, AI District, Future City</p>
              <p>⚡ Response time: Within 48 hours</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🔄 Policy Updates</h2>
          <p className="text-slate-300 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of 
            our services after any modifications constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  )
}