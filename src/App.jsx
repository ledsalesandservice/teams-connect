import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { ExternalLink, Phone, Mail, Globe, CheckCircle, PlayCircle, Users, Settings, Shield, Network } from 'lucide-react'
import './App.css'
import logo from './assets/youneedled_logo.png'

// Import all the PDF images
import enterprise001 from './assets/3-teammate-enterprise-provisioning-17-7-2025/001.webp'
import enterprise002 from './assets/3-teammate-enterprise-provisioning-17-7-2025/002.webp'
import enterprise003 from './assets/3-teammate-enterprise-provisioning-17-7-2025/003.webp'
import enterprise004 from './assets/3-teammate-enterprise-provisioning-17-7-2025/004.webp'
import enterprise005 from './assets/3-teammate-enterprise-provisioning-17-7-2025/005.webp'

import routing001 from './assets/4-teammate-setting-up-direct-routing-17-7-2025/001.webp'
import routing002 from './assets/4-teammate-setting-up-direct-routing-17-7-2025/002.webp'
import routing003 from './assets/4-teammate-setting-up-direct-routing-17-7-2025/003.webp'
import routing004 from './assets/4-teammate-setting-up-direct-routing-17-7-2025/004.webp'
import routing005 from './assets/4-teammate-setting-up-direct-routing-17-7-2025/005.webp'

import pbx001 from './assets/5-teammate-pbx-setup-17-7-2025/001.webp'
import pbx002 from './assets/5-teammate-pbx-setup-17-7-2025/002.webp'
import pbx003 from './assets/5-teammate-pbx-setup-17-7-2025/003.webp'

import users001 from './assets/6-teammate-adding-new-users-17-7-2025/001.webp'
import users002 from './assets/6-teammate-adding-new-users-17-7-2025/002.webp'
import users003 from './assets/6-teammate-adding-new-users-17-7-2025/003.webp'
import users004 from './assets/6-teammate-adding-new-users-17-7-2025/004.webp'
import users005 from './assets/6-teammate-adding-new-users-17-7-2025/005.webp'

import redundancy001 from './assets/7-teammate-redundancy-explained-17-7-2025/001.webp'
import redundancy002 from './assets/7-teammate-redundancy-explained-17-7-2025/002.webp'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: CheckCircle },
    { id: 'enterprise', title: 'Enterprise Provisioning', icon: Users },
    { id: 'routing', title: 'Direct Routing', icon: Network },
    { id: 'pbx', title: 'PBX Setup', icon: Settings },
    { id: 'users', title: 'Adding Users', icon: Users },
    { id: 'redundancy', title: 'Redundancy', icon: Shield }
  ]

  const videoLinks = {
    enterprise: 'https://drive.google.com/file/d/18tX0YN2AAY2k899adxl-QV4Dyw9Z4Wpo/view?usp=sharing',
    routing: 'https://drive.google.com/file/d/1NEObLH1F3ugKEze4zqu3eZ-1gXqIfHsz/view?usp=sharing',
    pbx: 'https://drive.google.com/file/d/1-XGp5IcO2w9w2o2q7wbEsofkcha0oUbc/view?usp=sharing',
    users: 'https://drive.google.com/file/d/1_ZmNOxcCSG41sKKZkh8yYGR8rir_dtT-/view?usp=sharing'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="You Need LED Logo" className="h-16 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TeamMate Setup Guide</h1>
                <p className="text-sm text-blue-600">Professional Enterprise Communications</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>(609) 335-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Globe className="h-4 w-4" />
                <span>youneedled.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Setup Steps</CardTitle>
                <CardDescription>Complete step-by-step guide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveSection(section.id)}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {section.title}
                    </Button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">Welcome to the TeamMate Setup Guide</CardTitle>
                    <CardDescription>
                      Complete step-by-step instructions for setting up TeamMate with YouNeedLED Connect
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Enterprise Provisioning</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Direct Routing Setup</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>PBX Configuration</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>User Management</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Redundancy Setup</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Support Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">(609) 335-0123</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">support@youneedled.com</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">www.youneedled.com</span>
                          </div>
                          <Badge variant="secondary" className="mt-2">
                            Licensed & Insured - NJ DCA #34BE00084900
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Our Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Settings className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Hosted PBX & VoIP</h4>
                        <p className="text-sm text-gray-600">Enterprise communications</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Security & Surveillance</h4>
                        <p className="text-sm text-gray-600">24/7 monitoring solutions</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Network className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Fiber & Infrastructure</h4>
                        <p className="text-sm text-gray-600">High-speed connectivity</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'enterprise' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">1. TeamMate Enterprise Provisioning</CardTitle>
                  <CardDescription>
                    Set up new enterprises and configure Microsoft Teams integration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {videoLinks.enterprise && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <PlayCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Video Tutorial</span>
                      </div>
                      <Button asChild variant="outline">
                        <a href={videoLinks.enterprise} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch Enterprise Setup Tutorial
                        </a>
                      </Button>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Enterprise Provisioning Process</h3>
                    <p className="text-gray-700 mb-4">
                      Once the Reseller's account has been activated via the e-mail received when the account was created, 
                      the first screen shown after login will be "Enterprises". In this screen Resellers are allowed to 
                      create new Enterprises (Companies with MS Teams end users) and also invite the enterprises Microsoft 
                      Global Administrators to accept the connection to the Teammate service.
                    </p>
                    <img src={enterprise002} alt="Enterprise Dashboard" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Required Information:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <strong>Enterprise Name:</strong> The name of the enterprise
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <strong>Enterprise Admin Email ID:</strong> E-mail address of the Microsoft Global Administrator
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <strong>User Limit (optional):</strong> Number of team users that can be configured
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <strong>SBC Region:</strong> Select the region geographically closest to the Enterprise
                        </div>
                      </li>
                    </ul>
                    <img src={enterprise003} alt="Enterprise Creation Form" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
                    <p className="text-yellow-700">
                      Microsoft requires a unique email address for each account, so the Master Reseller, 
                      Reseller and Enterprise accounts can't use the same one.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">PBX Type Configuration:</h4>
                    <p className="text-gray-700 mb-4">
                      After selecting the services to be used, move "YouNeedLED Connect" to the "Assigned PBX Types".
                    </p>
                    <img src={enterprise004} alt="PBX Type Selection" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Enterprise Management:</h4>
                    <p className="text-gray-700 mb-4">
                      Once the Enterprise has been created, you can Edit, Disable or resend the invitation e-mail to the Microsoft Enterprise Admin by clicking the three dots in the "Action" column.
                    </p>
                    <img src={enterprise005} alt="Enterprise Management" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'routing' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">2. TeamMate - Setting Up Direct Routing</CardTitle>
                  <CardDescription>
                    Configure Direct Routing for Microsoft Teams integration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {videoLinks.routing && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <PlayCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Video Tutorial</span>
                      </div>
                      <Button asChild variant="outline">
                        <a href={videoLinks.routing} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch Direct Routing Tutorial
                        </a>
                      </Button>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
                    <p className="text-gray-700 mb-4">
                      Ensure you have the correct Microsoft Office licensing. You will need to have at least 1 available 
                      unassigned user license with the "PHONE SYSTEM" or comparable add-on that allows you to use Direct Routing.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The Microsoft Teams Phone Standard can be found here: <a href="https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Microsoft Teams Phone</a>
                    </p>
                    <p className="text-gray-700 mb-4">
                      In the TeamMate portal available licenses will be displayed on the Direct Routing page (Enterprise → Direct Routing).
                    </p>
                    <img src={routing002} alt="Direct Routing Setup" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Setup Process:</h4>
                    <ol className="space-y-3 mb-4">
                      <li className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-0.5">1</Badge>
                        <div>
                          <strong>Select Gateway:</strong> Under set up Direct Routing Details, select the desired Gateway.
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-0.5">2</Badge>
                        <div>
                          <strong>Enter Invitation Code:</strong> Paste the invitation code from the email received by the Microsoft Administrator.
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-0.5">3</Badge>
                        <div>
                          <strong>Complete Setup:</strong> Click "Complete Direct Routing" and wait for provisioning (2-3 minutes).
                        </div>
                      </li>
                    </ol>
                    <img src={routing003} alt="Direct Routing Configuration" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Verification Process:</h4>
                    <p className="text-gray-700 mb-4">
                      The team mate portal will verify the MS Tenant and will request to complete the Direct Routing setup.
                    </p>
                    <img src={routing004} alt="Tenant Verification" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Completion Status:</h4>
                    <p className="text-gray-700 mb-4">
                      When the Direct Routing setup is complete, an email will be sent to the address used during creation of the Enterprise account. 
                      On the Enterprise portal dashboard, your Direct Routing Connection Status will be displayed as complete.
                    </p>
                    <img src={routing005} alt="Direct Routing Status" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Secondary Route Configuration:</h4>
                    <p className="text-blue-700 mb-2">
                      It is possible to configure a secondary route for redundancy. Each route will target a different TeamMate Gateway. 
                      You can re-use the same licenses from the first direct route.
                    </p>
                    <p className="text-blue-700">
                      Check the following link for full instructions: <a href="https://docs.connecttoteams.com/en/articles/133-secondary-voice-routes" className="underline" target="_blank" rel="noopener noreferrer">Secondary Voice Routes</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'pbx' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">3. TeamMate PBX Setup</CardTitle>
                  <CardDescription>
                    Configure PBX settings for SIP registration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {videoLinks.pbx && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <PlayCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Video Tutorial</span>
                      </div>
                      <Button asChild variant="outline">
                        <a href={videoLinks.pbx} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch PBX Setup Tutorial
                        </a>
                      </Button>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3">PBX Configuration</h3>
                    <p className="text-gray-700 mb-4">
                      Once Direct Routing is established, the next step is to add one or more PBXes. A PBX is where the SIP 
                      configuration is defined in order to achieve SIP Registration.
                    </p>
                    <p className="text-gray-700 mb-4">
                      To add a PBX, login to the TeamMate Portal at <a href="https://service.connecttoteams.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://service.connecttoteams.com</a>
                    </p>
                    <p className="text-gray-700 mb-4">
                      Then select the Enterprise by clicking over the "Enterprise Name" and select the "PBX" menu option from the sidebar.
                    </p>
                    <img src={pbx001} alt="PBX Dashboard" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">PBX Settings Configuration:</h4>
                    <p className="text-gray-700 mb-4">
                      Click on "Add PBX" to open the new PBX provisioning page. The following screenshot shows an example of the 
                      information required to complete the new PBX provisioning.
                    </p>
                    <img src={pbx002} alt="PBX Settings Form" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Required Configuration Parameters:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-3">
                        <div>
                          <strong>PBX Type:</strong> Select "YouNeedLED Connect"
                        </div>
                        <div>
                          <strong>PBX DNS Lookup type:</strong> Select "SRV"
                        </div>
                        <div>
                          <strong>PBX Outbound Transport Type:</strong> Select "TCP"
                        </div>
                        <div>
                          <strong>Voicemail Feature Code:</strong> 5001
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <strong>PBX SIP Domain:</strong> [Your_Domain].pbx.simplelogin.net
                        </div>
                        <div>
                          <strong>PBX SIP Domain Proxy:</strong> pbx1-dfw.youneedledconnect.com
                        </div>
                        <div>
                          <strong>Codecs:</strong> G722, G711 U-law, G711 A-law, G.729
                        </div>
                        <div>
                          <strong>Caller Name Policy:</strong> Use Teams Policy (default)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Important Settings:</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Topology Hiding: Leave unchecked (reduces SIP Via Headers information)</li>
                      <li>• Caller Name Policy: Leave as default "Use Teams Policy"</li>
                      <li>• Once completed click on "Save Settings"</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Video Reference:</h4>
                    <p className="text-gray-700 mb-4">
                      Here there is a video showing a generic PBX Creation, to run in fully compatibility mode use the defaults values recommended above.
                    </p>
                    <img src={pbx003} alt="PBX Video Reference" className="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'users' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">4. TeamMate - Adding New Users</CardTitle>
                  <CardDescription>
                    Provision new users and configure their settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {videoLinks.users && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <PlayCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Video Tutorial</span>
                      </div>
                      <Button asChild variant="outline">
                        <a href={videoLinks.users} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch Adding Users Tutorial
                        </a>
                      </Button>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3">User Provisioning Process</h3>
                    <p className="text-gray-700 mb-4">
                      After selecting the Enterprise you want to work with, navigate to the "Users" tab and click "Add User" 
                      in the upper right-hand corner.
                    </p>
                    <img src={users001} alt="Users Management Dashboard" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">User Configuration Form:</h4>
                    <p className="text-gray-700 mb-4">
                      It will open the users provisioning page, the following screenshot shows an example of the information required 
                      to complete the new User provisioning.
                    </p>
                    <img src={users002} alt="Add User Form" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Required Configuration Fields:</h4>
                    <div className="space-y-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <strong>PBX Locations:</strong> Select the PBX to which the new user belongs
                        </div>
                        <div>
                          <strong>Available Voice Routes:</strong> Choose the route closest to the user's location
                        </div>
                        <div>
                          <strong>Teams User:</strong> Select an existing user from your Microsoft Account
                        </div>
                        <div>
                          <strong>SIP User:</strong> Address of Record of the PBX user
                        </div>
                        <div>
                          <strong>Phone Number:</strong> Enter a valid phone number
                        </div>
                        <div>
                          <strong>SIP Authentication ID:</strong> Same as the SIP User
                        </div>
                      </div>
                    </div>
                    <img src={users003} alt="User Configuration Details" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Only users with Microsoft "Phone System" license will appear in the dropdown</li>
                      <li>• Provisioning usually takes 10-60 seconds but can take longer</li>
                      <li>• If users were added by Reseller, Enterprise Admin must click "Sync Teams Users"</li>
                      <li>• SIP User example: If user is "216a" and SIP Domain is "112233.pbx.simplelogin.net", the Address of Record will be 216a@112233.pbx.simplelogin.net</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">User Provisioning Confirmation:</h4>
                    <p className="text-gray-700 mb-4">
                      After you have successfully added a new user, the following e-mail will be received by the Microsoft Enterprise Global Admin.
                    </p>
                    <img src={users004} alt="User Provisioning Email" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">User Status Dashboard:</h4>
                    <p className="text-gray-700 mb-4">
                      Once the user has successfully registered to the PBX, it will be shown in the EPP Dashboard. The icons will change to green, 
                      the PBX Registration will show a check mark and there will be a timestamp indicating the time of the last SIP Registration sequence.
                    </p>
                    <img src={users005} alt="User Status Dashboard" className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">User Status Icons:</h4>
                    <p className="text-gray-700 mb-2">
                      It is important to indicate that in the Users section of the Enterprise dashboard, each user has 4 status icons which 
                      could be either green or red. From left to right they indicate the following:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      <div>✅ Microsoft User license assigned</div>
                      <div>✅ Phone System license assigned</div>
                      <div>✅ Phone System provisioned</div>
                      <div>✅ MS Teams Calling activated</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-red-700 text-sm">
                        <strong>Note:</strong> If there is a fifth icon, a red "D", check the following link for instructions about how to fix it: 
                        <a href="https://docs.connecttoteams.com/en/articles/24" className="underline ml-1" target="_blank" rel="noopener noreferrer">Troubleshooting Guide</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'redundancy' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">5. TeamMate Redundancy Explained</CardTitle>
                  <CardDescription>
                    Implement redundancy for maximum reliability
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Redundancy Overview</h3>
                    <p className="text-gray-700 mb-4">
                      When using the PBX Connector, redundancy has to be implemented by Enterprise admins in two fronts: 
                      the YouNeedLED Connect PBX and the TeamMate Gateways.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">YouNeedLED Connect PBX Redundancy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div>
                            <strong>PBX DNS Lookup type:</strong> SRV
                          </div>
                          <div>
                            <strong>PBX SIP Domain Proxy:</strong>
                            <ul className="mt-1 ml-4 space-y-1">
                              <li>• pbx1-dfw.youneedledconnect.com (Dallas)</li>
                              <li>• pbx1-mia.youneedledconnect.com (Miami)</li>
                            </ul>
                          </div>
                          <p className="text-sm text-gray-600">
                            Once configured, SRV redundancy will automatically switch between data centers if needed.
                          </p>
                        </div>
                        <img src={redundancy001} alt="PBX Redundancy Configuration" className="w-full rounded-lg shadow-md" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">TeamMate Gateway Redundancy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <p className="text-gray-700">
                            Configure at least two Direct Routes for each Enterprise to ensure redundancy.
                          </p>
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 text-sm">
                              <strong>Tip:</strong> You can reutilize the same licenses used for the first direct route.
                            </p>
                          </div>
                        </div>
                        <img src={redundancy002} alt="Gateway Redundancy Options" className="w-full rounded-lg shadow-md" />
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Benefits of Redundancy:</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Automatic failover between data centers</li>
                      <li>• No manual intervention required</li>
                      <li>• Ensures continuous service availability</li>
                      <li>• Protects against service affecting issues</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Additional Resources:</h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        For more details on license reuse: <a href="https://docs.connecttoteams.com/en/articles/14" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">License Management Guide</a>
                      </p>
                      <p className="text-gray-700">
                        Secondary voice routes setup: <a href="https://docs.connecttoteams.com/en/articles/133-secondary-voice-routes" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Secondary Voice Routes</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="You Need LED Logo" className="h-12 w-auto mb-4" />
              <p className="text-gray-300">
                Professional Enterprise Communications Solutions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(609) 335-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@youneedled.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>www.youneedled.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Area</h3>
              <p className="text-gray-300">
                South Jersey (Camden, Burlington, Gloucester, Atlantic Counties)
              </p>
              <Badge variant="secondary" className="mt-2">
                Licensed & Insured - NJ DCA #34BE00084900
              </Badge>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 You Need LED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

