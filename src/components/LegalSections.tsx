import { ShieldCheck, FileText } from 'lucide-react';

export function PrivacySection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-left space-y-8">
      
      {/* Title */}
      <div className="space-y-2 border-b border-slate-900 pb-6">
        <div className="inline-flex items-center space-x-1 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-tight uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Protection & Safety Standards</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-xs">Last Updated: August 2026</p>
      </div>

      {/* Main Articles */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-400 leading-relaxed">
        
        {/* 1. Introduction */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">1. Introduction</h3>
          <p>Welcome to RunCoder.</p>
          <p>
            RunCoder is an Android coding and learning application designed for students, programming beginners, educators, and developers.
          </p>
          <p>
            RunCoder allows you to create, edit, organize, learn from, and execute code directly from your Android device.
          </p>
          <p>
            This Privacy Policy explains what information may be accessed or collected when you use RunCoder, how that information is used, when it may be shared with third-party service providers, and the choices available to you.
          </p>
          <p>
            By using RunCoder, you acknowledge this Privacy Policy.
          </p>
        </div>

        {/* 2. Information You Provide and Your Code */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">2. Information You Provide and Your Code</h3>
          <p>RunCoder does not require you to create a RunCoder account.</p>
          <p>
            Your source code, programming projects, files, folders, and other content that you create or import into RunCoder generally remain under your control.
          </p>
          <p>
            RunCoder primarily stores your coding files and projects locally on your Android device.
          </p>
          <p>
            When using Android's Storage Access Framework, RunCoder accesses files or folders that you explicitly select or authorize.
          </p>
          <p className="font-semibold text-slate-300">RunCoder does not intentionally:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Scan your entire device storage</li>
            <li>Access unrelated files without authorization</li>
            <li>Maintain a cloud storage account containing your projects</li>
            <li>Sell your source code or projects</li>
            <li>Use your projects for advertising</li>
          </ul>
          <p>
            You are responsible for the content you create, import, execute, or otherwise use through RunCoder.
          </p>
        </div>

        {/* 3. Code Execution */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">3. Code Execution</h3>
          <p>
            Some RunCoder features allow you to execute code using a remote execution service.
          </p>
          <p>
            When you choose to execute supported code, RunCoder may send the information necessary to process the execution request to Judge0 Community Edition or the applicable execution infrastructure.
          </p>
          <p className="font-semibold text-slate-300">Depending on the execution request, this may include:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Programming language</li>
            <li>Source code</li>
            <li>Standard input or other execution input you provide</li>
          </ul>
          <p>
            This information is transmitted so that the service can compile and execute your program and return the resulting output or error information.
          </p>
          <p>
            Do not submit passwords, private keys, authentication tokens, confidential business information, or other sensitive information as part of code or program input unless you understand the risks associated with sending that information to a remote execution service.
          </p>
          <p>
            RunCoder does not intentionally use submitted source code for advertising or sell submitted source code.
          </p>
          <p>
            Third-party execution services may have their own data handling practices and policies.
          </p>
        </div>

        {/* 4. Information Collected Automatically */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">4. Information Collected Automatically</h3>
          <p>
            RunCoder does not require you to provide information such as your name, phone number, home address, contacts, messages, photos, or videos simply to use the core application.
          </p>
          <p>
            However, RunCoder integrates third-party services that may automatically collect certain technical, diagnostic, usage, advertising, or device-related information.
          </p>
          <p className="font-semibold text-slate-300">Depending on the service and your device/settings, this may include information such as:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Device and Android information</li>
            <li>Application version</li>
            <li>Diagnostic and crash information</li>
            <li>App and feature interactions</li>
            <li>Advertising identifiers</li>
            <li>IP address and approximate/general location information derived from it</li>
            <li>Performance information</li>
            <li>Information required for advertising, analytics, security, and fraud prevention</li>
          </ul>
          <p>
            The exact information collected may depend on the third-party service, your device configuration, your consent choices, and the features you use.
          </p>
          <p>
            For example, Google's Mobile Ads SDK may collect and share information such as IP address, product interactions, diagnostic information, and device/account identifiers for purposes including advertising, analytics, and fraud prevention.
          </p>
        </div>

        {/* 5. Third-Party Services */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">5. Third-Party Services</h3>
          <p>
            RunCoder uses third-party services to provide certain features and maintain the application.
          </p>
          <p>
            These services may process information according to their own privacy policies.
          </p>
          <div className="space-y-4 pl-2 pt-1">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-200">Google AdMob</h4>
              <p>RunCoder's free experience may display advertisements through Google AdMob.</p>
              <p>
                The Google Mobile Ads SDK may process information such as device identifiers, IP address, app interactions, diagnostics, and advertising-related information for purposes including advertising, analytics, security, and fraud prevention.
              </p>
              <p>Google's handling of this information is governed by Google's applicable policies and settings.</p>
              <p>RunCoder does not ask users to click advertisements or interact with advertisements for the purpose of generating revenue.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-200">Firebase Analytics</h4>
              <p>RunCoder may use Firebase Analytics to understand how users interact with the application and to help us improve RunCoder.</p>
              <p>Analytics collection and advertising-related use may depend on Google's applicable settings and consent mechanisms.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-200">Firebase Crashlytics</h4>
              <p>RunCoder may use Firebase Crashlytics to receive crash and diagnostic information.</p>
              <p>This helps us identify crashes, understand technical problems, and improve application stability.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-200">Google Play Billing</h4>
              <p>RunCoder Pro purchases, subscriptions, renewals, cancellations, and refunds are processed through Google Play Billing.</p>
              <p>RunCoder does not directly receive or store your full payment-card information through the app.</p>
              <p>Google may process transaction and purchase-related information according to Google's applicable terms and privacy practices.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-200">Judge0 Community Edition</h4>
              <p>Judge0 is used for remote code execution when you choose to execute supported code.</p>
              <p>Information required for execution may be transmitted to the execution service as described in the Code Execution section of this Privacy Policy.</p>
            </div>
          </div>
        </div>

        {/* 6. RunCoder Pro */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">6. RunCoder Pro</h3>
          <p>RunCoder may provide optional paid features under RunCoder Pro.</p>
          <p className="font-semibold text-slate-300">Depending on the version of RunCoder and the features available, Pro may include benefits such as:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Pro templates</li>
            <li>Additional template content</li>
            <li>Pro fonts</li>
            <li>An ad-free experience</li>
            <li>Other premium features introduced in future versions</li>
          </ul>
          <p>Eligibility for Pro features is determined through the applicable Google Play purchase/subscription entitlement.</p>
          <p>RunCoder does not receive your payment-card information from Google Play.</p>
        </div>

        {/* 7. Templates and Third-Party Names */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">7. Templates and Third-Party Names</h3>
          <p>
            RunCoder provides coding templates and examples intended to help users learn, experiment, prototype, and start projects more easily.
          </p>
          <p>
            Some templates may contain generic or recognizable names, product concepts, interface concepts, service names, or other references that may resemble or refer to real-world companies, products, platforms, or services.
          </p>
          <p>
            Such references, when present, are used for educational, demonstration, identification, or design-example purposes.
          </p>
          <p className="font-semibold text-slate-300">Unless explicitly stated otherwise:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>RunCoder does not claim ownership of third-party trademarks or copyrighted material.</li>
            <li>The appearance of a company name, product name, trademark, or similar reference does not mean that RunCoder is affiliated with, sponsored by, endorsed by, or officially connected to that company or product.</li>
            <li>A template is not intended to represent an official application, website, product, or service of any third party.</li>
            <li>RunCoder does not authorize users to impersonate a third party or mislead others about the origin of their work.</li>
            <li>Users are responsible for reviewing and complying with applicable intellectual-property, trademark, copyright, licensing, API, and other legal requirements before using template material outside RunCoder.</li>
          </ul>
          <p>
            Where practical, RunCoder may use generic names, placeholders, or original assets instead of third-party branding.
          </p>
          <p>
            This section is a disclosure and does not grant permission to use third-party intellectual property.
          </p>
        </div>

        {/* 8. Your Responsibility for Template Content */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">8. Your Responsibility for Template Content</h3>
          <p>
            Templates are provided as starting points for learning, experimentation, and development.
          </p>
          <p className="font-semibold text-slate-300">Before publishing, distributing, selling, or commercially using a project based on a RunCoder template, you should review:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Copyrights</li>
            <li>Trademarks</li>
            <li>Images and other media</li>
            <li>Fonts</li>
            <li>Third-party libraries</li>
            <li>APIs</li>
            <li>Licenses</li>
            <li>Brand references</li>
            <li>Any other third-party material</li>
          </ul>
          <p>
            You are responsible for ensuring that your final project complies with applicable laws and third-party licenses.
          </p>
        </div>

        {/* 9. Permissions */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">9. Permissions</h3>
          <p>RunCoder requests permissions and access that are necessary for its functionality.</p>
          <div className="space-y-3 pl-2 pt-1">
            <div>
              <h4 className="font-bold text-slate-200">Internet Access</h4>
              <p className="font-semibold text-slate-400 text-xs mt-1">Internet access may be used for:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400 mt-1">
                <li>Remote code execution</li>
                <li>Firebase services</li>
                <li>Crash reporting</li>
                <li>Analytics</li>
                <li>Advertising</li>
                <li>Google Play services and billing</li>
                <li>Other network-dependent RunCoder features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-200">Storage Access Framework</h4>
              <p className="mt-1">
                RunCoder uses Android's Storage Access Framework when you choose to open, import, save, or otherwise authorize access to files and folders.
              </p>
              <p className="mt-1">
                RunCoder does not require unrestricted access to your entire device storage for normal file operations.
              </p>
            </div>
          </div>
        </div>

        {/* 10. Advertising */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">10. Advertising</h3>
          <p>RunCoder may display advertisements to users who are not entitled to an ad-free Pro experience.</p>
          <p>Advertisements are provided through Google AdMob.</p>
          <p>
            Advertising requests may involve information processed by Google and its advertising systems, including device and advertising identifiers, IP address, app interactions, and diagnostic information, as applicable.
          </p>
          <p className="font-semibold text-slate-300">RunCoder does not:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Ask users to click advertisements</li>
            <li>Offer rewards for clicking advertisements</li>
            <li>Encourage users to generate artificial ad impressions</li>
            <li>Ask users to repeatedly interact with advertisements for RunCoder's benefit</li>
          </ul>
          <p>Advertising behavior is subject to Google's advertising policies.</p>
        </div>

        {/* 11. Purchases and Subscriptions */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">11. Purchases and Subscriptions</h3>
          <p>RunCoder may offer subscriptions and/or one-time purchases through Google Play.</p>
          <p className="font-semibold text-slate-300">Google Play handles:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Payment processing</li>
            <li>Subscription management</li>
            <li>Renewals</li>
            <li>Cancellations</li>
            <li>Refunds</li>
            <li>Transaction processing</li>
          </ul>
          <p>RunCoder does not directly store your complete payment-card information.</p>
          <p>Your purchases are subject to the applicable Google Play terms and policies.</p>
        </div>

        {/* 12. Data Sharing */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">12. Data Sharing</h3>
          <p>RunCoder does not sell your personal information.</p>
          <p className="font-semibold text-slate-300">
            Information may nevertheless be transmitted to or processed by third-party service providers when necessary to provide RunCoder features, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Google AdMob</li>
            <li>Firebase services</li>
            <li>Google Play Billing</li>
            <li>Judge0 or applicable code-execution services</li>
          </ul>
          <p>
            These services may process information according to their own policies and the configurations applicable to your use of RunCoder.
          </p>
          <p>
            RunCoder may also disclose information where required by applicable law, legal process, or to protect the rights, safety, security, or integrity of RunCoder, its users, or others.
          </p>
        </div>

        {/* 13. Data Retention */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">13. Data Retention</h3>
          <p>RunCoder does not maintain a RunCoder user account or cloud project-storage system as part of its normal operation.</p>
          <div className="space-y-3 pl-2 pt-1">
            <div>
              <h4 className="font-bold text-slate-200">Local files</h4>
              <p>Your locally stored code and files remain on your device until you or the operating system removes them.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-200">Analytics and diagnostics</h4>
              <p>Information collected by Firebase or other third-party services may be retained according to the applicable provider's retention policies and settings.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-200">Advertising information</h4>
              <p>Advertising-related information may be retained or processed by Google according to Google's applicable policies and retention practices.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-200">Code execution</h4>
              <p>Information transmitted for remote code execution may be processed by the applicable execution service according to that service's own practices.</p>
              <p className="mt-1">RunCoder does not intentionally maintain a permanent cloud archive of your submitted source code.</p>
            </div>
          </div>
        </div>

        {/* 14. Data Security */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">14. Data Security</h3>
          <p>We take reasonable measures designed to protect information handled by RunCoder.</p>
          <p className="font-semibold text-slate-300">These measures may include:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Encrypted network communication where applicable</li>
            <li>Google Play's secure payment infrastructure</li>
            <li>Local storage of user projects</li>
            <li>Android platform security mechanisms</li>
            <li>Use of established third-party service providers</li>
          </ul>
          <p>
            However, no application, device, network, or electronic transmission can be guaranteed to be completely secure.
          </p>
          <p>
            You should avoid placing passwords, private keys, authentication credentials, or other highly sensitive information into code submitted to remote execution services or other third-party services.
          </p>
        </div>

        {/* 15. Children's Privacy */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">15. Children's Privacy</h3>
          <p>RunCoder is designed primarily for students, programming learners, educators, and developers.</p>
          <p>
            RunCoder is not specifically directed toward children below the age at which parental consent is required under applicable law.
          </p>
          <p>
            We do not knowingly request personal information from children for the purpose of creating RunCoder accounts, because RunCoder does not require user account registration.
          </p>
          <p>
            If you believe that a child has provided personal information to RunCoder in a manner that requires action under applicable law, please contact us at the address below.
          </p>
        </div>

        {/* 16. Your Privacy Choices */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">16. Your Privacy Choices</h3>
          <p className="font-semibold text-slate-300">Depending on your device, location, and the services used by RunCoder, you may have choices regarding:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Advertising personalization</li>
            <li>Advertising identifiers</li>
            <li>Analytics collection</li>
            <li>Device privacy settings</li>
            <li>Third-party service privacy settings</li>
            <li>Access to files through Android's file-selection mechanisms</li>
          </ul>
          <p>
            Google and Firebase provide additional privacy controls that may allow users to manage certain forms of data collection and advertising personalization.
          </p>
          <p>
            Some privacy choices may be controlled directly through Android or Google settings rather than through RunCoder.
          </p>
        </div>

        {/* 17. Third-Party Privacy Policies */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">17. Third-Party Privacy Policies</h3>
          <p>RunCoder relies on third-party services whose data practices are governed by their respective policies.</p>
          <p>These may include Google, Firebase, Google Play, AdMob, and Judge0.</p>
          <p>Users should review the applicable third-party privacy policies for the most current information about their data practices.</p>
        </div>

        {/* 18. Changes to This Privacy Policy */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">18. Changes to This Privacy Policy</h3>
          <p className="font-semibold text-slate-300">We may update this Privacy Policy when:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>RunCoder adds or removes features</li>
            <li>Our data practices change</li>
            <li>Third-party services change</li>
            <li>Legal or regulatory requirements change</li>
            <li>We make other material changes to the application</li>
          </ul>
          <p>When we update this policy, we will update the Last Updated date.</p>
          <p>
            The current version of this Privacy Policy will be made available through RunCoder and the official privacy-policy URL associated with the RunCoder Google Play listing.
          </p>
        </div>

        {/* 19. Contact Us */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">19. Contact Us</h3>
          <p>If you have questions, concerns, privacy requests, or questions about how RunCoder handles information, contact:</p>
          <div className="p-3 bg-[#11131e] rounded-xl border border-slate-900 space-y-1 text-slate-300">
            <p className="font-bold text-white">RunCoder Support</p>
            <p>📧 Email: <a href="mailto:runcodersupport@gmail.com" className="text-indigo-400 hover:underline">runcodersupport@gmail.com</a></p>
          </div>
          <p className="text-xs text-slate-500">We will review privacy-related inquiries and respond as appropriate.</p>
        </div>

      </div>

    </div>
  );
}

export function TermsSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-left space-y-8">
      
      {/* Title */}
      <div className="space-y-2 border-b border-slate-900 pb-6">
        <div className="inline-flex items-center space-x-1 bg-indigo-950/40 text-indigo-400 border border-indigo-900/30 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-tight uppercase">
          <FileText className="w-3.5 h-3.5" />
          <span>Rules & Licensing Agreement</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-xs">Last Updated: August 2026</p>
      </div>

      {/* Main Articles */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-400 leading-relaxed">
        
        {/* 1. Acceptance of Terms */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">1. Acceptance of Terms</h3>
          <p>Welcome to RunCoder.</p>
          <p>
            By downloading, installing, accessing, or using RunCoder, you agree to these Terms of Service.
          </p>
          <p>
            If you do not agree with these Terms, please discontinue use of RunCoder.
          </p>
          <p>
            These Terms apply to your use of the RunCoder application, its features, templates, premium features, and related services.
          </p>
        </div>

        {/* 2. Use of RunCoder */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">2. Use of RunCoder</h3>
          <p className="font-semibold text-slate-300">RunCoder is designed for:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Learning programming</li>
            <li>Software development</li>
            <li>Educational use</li>
            <li>Experimentation</li>
            <li>Prototyping</li>
            <li>Personal development projects</li>
          </ul>
          <p>
            You agree to use RunCoder only for lawful purposes and in accordance with applicable laws, regulations, and platform policies.
          </p>
          <p>
            You are responsible for the code, files, projects, content, and other material that you create, import, execute, publish, or share using RunCoder.
          </p>
        </div>

        {/* 3. Your Content */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">3. Your Content</h3>
          <p>
            You retain ownership of the source code, projects, files, and other original content that you create using RunCoder.
          </p>
          <p>
            RunCoder does not claim ownership of your original code or project files.
          </p>
          <p>
            RunCoder does not sell your code or claim ownership of your personal projects.
          </p>
          <p>
            You are responsible for maintaining backups of important files and projects.
          </p>
          <p>
            RunCoder is not responsible for loss of locally stored files resulting from device failure, accidental deletion, operating-system changes, application problems, or other circumstances outside our reasonable control.
          </p>
        </div>

        {/* 4. Templates and Pro Templates */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">4. Templates and Pro Templates</h3>
          <p>
            RunCoder provides coding templates, including free and Pro templates, as learning, development, demonstration, prototyping, and starting-point resources.
          </p>
          <p>
            Templates are provided as examples or starter projects.
          </p>
          <p>
            Templates are not intended to be treated as finished products or guaranteed production-ready applications.
          </p>
          <p>
            You may modify templates for your own learning and development purposes, subject to the licenses and rights applicable to the template and any third-party material contained within it.
          </p>
          <p>
            Some templates may contain concepts, names, descriptions, interface ideas, placeholder content, or references that resemble or refer to real-world companies, products, services, platforms, or brands.
          </p>
          <p>
            Such references may be used for educational, demonstration, identification, or design-example purposes.
          </p>
          <p>
            RunCoder does not claim ownership of third-party intellectual property merely because it appears in or is referenced by a template.
          </p>
        </div>

        {/* 5. Third-Party Trademarks and Intellectual Property */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">5. Third-Party Trademarks and Intellectual Property</h3>
          <p className="font-semibold text-slate-300">Third-party:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Names</li>
            <li>Trademarks</li>
            <li>Logos</li>
            <li>Images</li>
            <li>Fonts</li>
            <li>Libraries</li>
            <li>APIs</li>
            <li>Services</li>
            <li>Copyrighted material</li>
            <li>Other proprietary material</li>
          </ul>
          <p>remain the property of their respective owners.</p>
          <p>
            Unless explicitly stated otherwise, RunCoder is not affiliated with, sponsored by, endorsed by, or officially connected with any third-party company, brand, product, application, or service referenced by a template.
          </p>
          <p>
            The appearance of a third-party name, trademark, logo, or design reference does not imply endorsement, sponsorship, ownership, or affiliation.
          </p>
          <p>
            A template must not be represented as an official product, website, application, or service of another company.
          </p>
          <div className="p-3 bg-amber-950/20 rounded-xl border border-amber-900/30 text-amber-200/90 text-xs space-y-1">
            <p className="font-bold uppercase tracking-wider text-[11px]">Important Notice</p>
            <p>
              A disclaimer does not grant permission to use third-party copyrighted or trademarked material. You are responsible for obtaining any permissions or licenses required for material you use outside RunCoder.
            </p>
          </div>
        </div>

        {/* 6. Template Previews and Screenshots */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">6. Template Previews and Screenshots</h3>
          <p>
            Template previews and screenshots are visual demonstrations of the appearance or functionality of a template.
          </p>
          <p>
            They are not intended to represent official products or services of third parties.
          </p>
          <p className="font-semibold text-slate-300">If a preview contains recognizable third-party branding, interface concepts, names, or similar references, this does not imply:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Ownership</li>
            <li>Sponsorship</li>
            <li>Endorsement</li>
            <li>Partnership</li>
            <li>Affiliation</li>
          </ul>
          <p>
            RunCoder may modify, replace, restrict, or remove template previews or template content when necessary.
          </p>
        </div>

        {/* 7. Responsible Use of Templates */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">7. Responsible Use of Templates</h3>
          <p>
            Before publishing, deploying, distributing, selling, or commercially using a project based on a RunCoder template, you are responsible for reviewing the template and your final project.
          </p>
          <p className="font-semibold text-slate-300">You should check for:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Copyrighted material</li>
            <li>Trademarks and logos</li>
            <li>Images and other media</li>
            <li>Fonts</li>
            <li>Third-party libraries</li>
            <li>APIs</li>
            <li>Licenses</li>
            <li>Credentials and API keys</li>
            <li>Privacy requirements</li>
            <li>Third-party terms</li>
            <li>Applicable laws</li>
            <li>Platform policies</li>
          </ul>
          <p>
            You must remove or replace third-party material when you do not have the necessary rights or permission to use it.
          </p>
          <p>
            You are responsible for ensuring that your final project is legally and technically suitable for the way you intend to use it.
          </p>
        </div>

        {/* 8. Intellectual Property Complaints */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">8. Intellectual Property Complaints</h3>
          <p>
            If a copyright owner, trademark owner, or other rights holder believes that material distributed through RunCoder infringes their rights, they may contact:
          </p>
          <p className="text-slate-300 font-bold">
            <a href="mailto:runcodersupport@gmail.com" className="text-indigo-400 hover:underline">runcodersupport@gmail.com</a>
          </p>
          <p>
            Please provide enough information for us to identify the relevant material and understand the nature of the complaint.
          </p>
          <p>
            RunCoder may review legitimate complaints and, where appropriate, restrict, modify, replace, or remove the relevant template, preview, or other content.
          </p>
          <p>
            Submitting a complaint does not guarantee removal, and RunCoder may consider the applicable legal and factual circumstances before taking action.
          </p>
        </div>

        {/* 9. Pro Fonts */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">9. Pro Fonts</h3>
          <p>RunCoder Pro may provide additional fonts or typography options.</p>
          <p>Fonts may be subject to separate licenses.</p>
          <p>
            You are responsible for complying with the applicable font license when exporting, embedding, distributing, publishing, or otherwise using fonts outside RunCoder.
          </p>
          <p>
            Access to a font through RunCoder does not automatically grant you unrestricted rights to redistribute or commercially license that font.
          </p>
        </div>

        {/* 10. RunCoder Pro */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">10. RunCoder Pro</h3>
          <p>RunCoder may offer optional premium features through RunCoder Pro.</p>
          <p className="font-semibold text-slate-300">Depending on the current version of RunCoder, Pro may include benefits such as:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Pro Templates</li>
            <li>Additional template content</li>
            <li>Pro Fonts</li>
            <li>An ad-free experience</li>
            <li>Other premium features introduced in the future</li>
          </ul>
          <p>Pro availability is determined by the applicable Google Play purchase or subscription entitlement.</p>
          <p>Premium features may change over time as RunCoder evolves.</p>
          <p>We do not guarantee that a particular premium feature will remain available indefinitely.</p>
        </div>

        {/* 11. Purchases, Subscriptions, and Billing */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">11. Purchases, Subscriptions, and Billing</h3>
          <p>RunCoder Pro purchases, subscriptions, renewals, cancellations, and refunds are processed through Google Play Billing.</p>
          <p>Google Play controls payment processing and applicable transaction information.</p>
          <p>
            Prices, billing periods, renewals, cancellation procedures, and refunds are subject to the applicable Google Play terms and policies.
          </p>
          <p>RunCoder does not directly process or store your complete payment-card information.</p>
          <p>
            Subscription or lifetime-purchase entitlements may be unavailable if the applicable purchase is cancelled, refunded, expires, or is otherwise no longer valid.
          </p>
        </div>

        {/* 12. Advertisements */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">12. Advertisements</h3>
          <p>The free version of RunCoder may display advertisements through Google AdMob.</p>
          <p>Advertisements help support the continued development and operation of RunCoder.</p>
          <p>RunCoder Pro may provide an ad-free experience where applicable.</p>
          <p className="font-semibold text-slate-300">You must not:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Click your own advertisements</li>
            <li>Generate artificial ad impressions</li>
            <li>Use automated tools to interact with advertisements</li>
            <li>Encourage or instruct others to click advertisements</li>
            <li>Manipulate advertising systems</li>
            <li>Attempt to generate revenue through fraudulent advertising activity</li>
          </ul>
          <p>Advertising activity is subject to applicable Google AdMob and Google policies.</p>
        </div>

        {/* 13. Code Execution */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">13. Code Execution</h3>
          <p>RunCoder may provide code-execution functionality using third-party execution infrastructure.</p>
          <p>
            When you choose to execute code, your code or other required execution data may be transmitted to the applicable execution service.
          </p>
          <p>You are responsible for the code and input you submit for execution.</p>
          <p className="font-semibold text-slate-300">Do not submit:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Passwords</li>
            <li>Private keys</li>
            <li>Authentication tokens</li>
            <li>Confidential information</li>
            <li>Sensitive personal information</li>
            <li>Other secrets</li>
          </ul>
          <p>to remote execution services unless you understand the associated risks.</p>
          <p>
            RunCoder does not guarantee that every program will execute successfully or that third-party execution services will always be available, accurate, secure, or uninterrupted.
          </p>
        </div>

        {/* 14. Acceptable Use */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">14. Acceptable Use</h3>
          <p className="font-semibold text-slate-300">You agree not to use RunCoder to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Conduct unlawful activities</li>
            <li>Create or distribute malicious software</li>
            <li>Attack, compromise, or interfere with systems without authorization</li>
            <li>Commit fraud or deceptive activity</li>
            <li>Impersonate another person, company, application, or service</li>
            <li>Infringe copyrights, trademarks, or other intellectual-property rights</li>
            <li>Circumvent Premium features or payment requirements</li>
            <li>Circumvent or manipulate advertising systems</li>
            <li>Abuse application vulnerabilities</li>
            <li>Use automated systems to abuse RunCoder or its services</li>
            <li>Interfere with the security, availability, or operation of RunCoder</li>
            <li>Reverse engineer or modify protected components of RunCoder except where expressly permitted by applicable law</li>
            <li>Use RunCoder in violation of applicable laws or third-party rights</li>
          </ul>
        </div>

        {/* 15. Third-Party Services */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">15. Third-Party Services</h3>
          <p>RunCoder relies on certain third-party services to provide functionality.</p>
          <p className="font-semibold text-slate-300">These may include:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Google Play Billing</li>
            <li>Google AdMob</li>
            <li>Firebase services</li>
            <li>Judge0 or applicable code-execution infrastructure</li>
            <li>Other services that may be introduced in future versions</li>
          </ul>
          <p>
            Third-party services may have their own terms, policies, licenses, availability limitations, and privacy practices.
          </p>
          <p>
            Your use of third-party services through RunCoder may be subject to those providers' applicable terms and policies.
          </p>
        </div>

        {/* 16. Availability */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">16. Availability</h3>
          <p>We strive to keep RunCoder reliable and available, but we cannot guarantee uninterrupted operation.</p>
          <p className="font-semibold text-slate-300">RunCoder may experience:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Downtime</li>
            <li>Bugs</li>
            <li>Errors</li>
            <li>Service interruptions</li>
            <li>Third-party service outages</li>
            <li>Device-specific problems</li>
            <li>Network-related problems</li>
          </ul>
          <p>Features may be changed, improved, suspended, replaced, or removed as RunCoder develops.</p>
          <p>
            We may also temporarily restrict functionality when necessary for security, maintenance, legal compliance, or technical reasons.
          </p>
        </div>

        {/* 17. Suspension and Termination */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">17. Suspension and Termination</h3>
          <p className="font-semibold text-slate-300">
            We may restrict or terminate access to RunCoder features where reasonably necessary, including when a user:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Violates these Terms</li>
            <li>Abuses the application</li>
            <li>Attempts to bypass security or Premium restrictions</li>
            <li>Engages in fraudulent activity</li>
            <li>Uses RunCoder unlawfully</li>
            <li>Creates risks for RunCoder, its users, or third parties</li>
          </ul>
          <p>
            Termination or restriction of access does not remove rights or obligations that by their nature should continue after termination.
          </p>
        </div>

        {/* 18. Intellectual Property Owned by RunCoder */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">18. Intellectual Property Owned by RunCoder</h3>
          <p className="font-semibold text-slate-300">RunCoder and its developers retain applicable rights in:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>The RunCoder application</li>
            <li>RunCoder branding</li>
            <li>RunCoder logos</li>
            <li>Original RunCoder-created content</li>
            <li>RunCoder-created template code</li>
            <li>Original documentation</li>
            <li>Original interface elements</li>
          </ul>
          <p>
            Except where expressly permitted, you may not copy, redistribute, resell, decompile, modify, or commercially exploit protected RunCoder components as your own.
          </p>
          <p>
            Nothing in these Terms transfers ownership of RunCoder's intellectual property to you.
          </p>
        </div>

        {/* 19. Third-Party Rights */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">19. Third-Party Rights</h3>
          <p>Nothing in these Terms transfers ownership of third-party intellectual property to RunCoder or to you.</p>
          <p>Third-party rights remain with their respective owners.</p>
          <p>
            If you use a template containing third-party material, you are responsible for complying with the applicable rights, licenses, permissions, and restrictions.
          </p>
          <p>
            RunCoder does not guarantee that every third-party asset referenced in a template is available for unrestricted commercial use.
          </p>
        </div>

        {/* 20. Disclaimer of Warranties */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">20. Disclaimer of Warranties</h3>
          <p>
            RunCoder is provided on an "as is" and "as available" basis to the maximum extent permitted by applicable law.
          </p>
          <p className="font-semibold text-slate-300">We do not guarantee that:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>RunCoder will always be available</li>
            <li>Every feature will work without errors</li>
            <li>Every program will execute successfully</li>
            <li>Code execution results will always be accurate</li>
            <li>Third-party services will always be available</li>
            <li>Templates will be suitable for every purpose</li>
            <li>Templates will be production-ready</li>
            <li>The application will be completely free of bugs or security issues</li>
          </ul>
          <p>
            You are responsible for evaluating whether RunCoder and its templates are suitable for your intended use.
          </p>
        </div>

        {/* 21. Limitation of Liability */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">21. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by applicable law, RunCoder and its developers will not be responsible for indirect, incidental, special, consequential, or similar damages resulting from your use of or inability to use RunCoder.
          </p>
          <p className="font-semibold text-slate-300">This may include, where permitted by law:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Loss of data</li>
            <li>Loss of projects</li>
            <li>Loss of business</li>
            <li>Loss of profits</li>
            <li>Service interruption</li>
            <li>Issues caused by third-party services</li>
            <li>Problems resulting from code or templates</li>
            <li>Problems resulting from user modifications</li>
          </ul>
          <p>
            Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.
          </p>
        </div>

        {/* 22. User Backups */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">22. User Backups</h3>
          <p>
            You are responsible for maintaining backups of important code, projects, files, and other data.
          </p>
          <p>
            Do not rely on RunCoder as your only copy of important work.
          </p>
          <p>
            We strongly recommend keeping important projects in an additional secure location.
          </p>
        </div>

        {/* 23. Changes to These Terms */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">23. Changes to These Terms</h3>
          <p>We may update these Terms of Service from time to time.</p>
          <p className="font-semibold text-slate-300">Changes may be made when:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>RunCoder adds or removes features</li>
            <li>Our services change</li>
            <li>Legal requirements change</li>
            <li>Third-party services change</li>
            <li>We introduce new products or features</li>
            <li>We need to improve security or clarify existing terms</li>
          </ul>
          <p>When we make material changes, we will update the Last Updated date.</p>
          <p>
            Continued use of RunCoder after updated Terms become available constitutes acceptance of the revised Terms to the extent permitted by applicable law.
          </p>
          <p>
            If you do not agree with updated Terms, you should discontinue use of RunCoder.
          </p>
        </div>

        {/* 24. Contact */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-white">24. Contact</h3>
          <p>Questions, concerns, or intellectual-property complaints regarding these Terms may be sent to:</p>
          <div className="p-3 bg-[#11131e] rounded-xl border border-slate-900 space-y-1 text-slate-300">
            <p className="font-bold text-white">RunCoder Support</p>
            <p>📧 Email: <a href="mailto:runcodersupport@gmail.com" className="text-indigo-400 hover:underline">runcodersupport@gmail.com</a></p>
          </div>
          <p className="text-xs text-slate-500">We will review inquiries and respond as appropriate.</p>
        </div>

      </div>

    </div>
  );
}
