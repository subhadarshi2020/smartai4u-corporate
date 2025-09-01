import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { 
  Brain, 
  ChartLine, 
  Users, 
  Globe, 
  Envelope, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  Clock,
  Award
} from "@phosphor-icons/react"
import { toast } from "sonner"

function App() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Thank you for your interest! We'll contact you within 24 hours.")
    setContactForm({ name: '', email: '', company: '', message: '' })
  }

  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Comprehensive AI roadmaps tailored to your business objectives and industry requirements.",
      features: ["AI Readiness Assessment", "Strategic Implementation Planning", "ROI Analysis & Forecasting", "Technology Stack Selection"]
    },
    {
      icon: ChartLine,
      title: "Custom AI Solutions",
      description: "End-to-end AI solution development from concept to deployment and ongoing optimization.",
      features: ["GenAI - Agentic AI - Multi-agent solutions", "Machine Learning Models", "Natural Language Processing", "Computer Vision Systems", "Predictive Analytics"]
    },
    {
      icon: Users,
      title: "AI Training Programs",
      description: "Comprehensive training programs to upskill your team and maximize AI adoption success.",
      features: ["Executive AI Workshops", "Technical Team Training", "Change Management", "Certification Programs"]
    },
    {
      icon: Globe,
      title: "Global Implementation",
      description: "Worldwide AI deployment with local expertise and 24/7 support across all time zones.",
      features: ["Multi-region Deployment", "Cultural Adaptation", "Compliance & Governance", "Ongoing Support"]
    }
  ]

  const testimonials = [
    {
      company: "TechCorp Global",
      text: "SmartAI4u transformed our operations with their AI strategy. ROI exceeded expectations by 300%.",
      author: "Sarah Chen, CTO"
    },
    {
      company: "Manufacturing Plus",
      text: "The training program was exceptional. Our team is now confidently implementing AI solutions.",
      author: "Marcus Rodriguez, VP Operations"
    },
    {
      company: "RetailNext",
      text: "Their custom AI solution revolutionized our customer experience and increased sales by 45%.",
      author: "Emma Thompson, CEO"
    }
  ]

  const stats = [
    { value: "10+", label: "Clients Worldwide" },
    { value: "98%", label: "Success Rate" },
    { value: "2+", label: "Countries Served" },
    { value: "24/7", label: "Global Support" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" weight="bold" />
              <span className="text-xl font-bold text-primary">SmartAI4u</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Get Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Request Free Consultation</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Tell us about your AI needs..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-accent">Intelligent AI Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Leading AI consulting and training services for businesses worldwide. 
            From strategy to implementation, we make AI accessible and profitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Request Free Consultation</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="hero-name">Full Name</Label>
                    <Input
                      id="hero-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-email">Email</Label>
                    <Input
                      id="hero-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-company">Company</Label>
                    <Input
                      id="hero-company"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-message">Project Details</Label>
                    <Textarea
                      id="hero-message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tell us about your AI needs..."
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Submit Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our AI Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and growth across every aspect of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card-hover border-2 border-border hover:border-accent/50">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" weight="bold" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" weight="fill" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section id="about" className="py-24 bg-card px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-6">
                Leading AI Innovation Worldwide
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                SmartAI4u is a global leader in artificial intelligence consulting and training. 
                We empower businesses to harness the transformative power of AI through strategic 
                guidance, custom solutions, and comprehensive education programs.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-accent" weight="bold" />
                  <span className="font-semibold">Strategic Focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-accent" weight="bold" />
                  <span className="font-semibold">Innovation Driven</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-accent" weight="bold" />
                  <span className="font-semibold">Proven Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-accent" weight="bold" />
                  <span className="font-semibold">Secure & Compliant</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">Machine Learning</Badge>
                <Badge variant="secondary" className="px-3 py-1">Deep Learning</Badge>
                <Badge variant="secondary" className="px-3 py-1">NLP</Badge>
                <Badge variant="secondary" className="px-3 py-1">Computer Vision</Badge>
                <Badge variant="secondary" className="px-3 py-1">Predictive Analytics</Badge>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-8 w-8 text-accent" weight="bold" />
                  <h3 className="text-xl font-semibold">Rapid Implementation</h3>
                </div>
                <p className="text-muted-foreground">
                  Get your AI solutions deployed 3x faster with our proven methodologies and pre-built frameworks.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Award className="h-8 w-8 text-accent" weight="bold" />
                  <h3 className="text-xl font-semibold">Expert Team</h3>
                </div>
                <p className="text-muted-foreground">
                  Our certified AI specialists have delivered successful projects across multiple industries worldwide.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses transform with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent" weight="fill" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-6">Get Started Today</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business with AI? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Envelope className="h-6 w-6 text-accent" weight="bold" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact_us@SmartAI4u.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Globe className="h-6 w-6 text-accent" weight="bold" />
                  </div>
                  <div>
                    <p className="font-semibold">Global Presence</p>
                    <p className="text-muted-foreground">Serving clients in multiple countries</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" weight="bold" />
                  </div>
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Request Consultation</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-company">Company</Label>
                  <Input
                    id="contact-company"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">Tell us about your AI needs</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Describe your project, goals, and timeline..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8" weight="bold" />
                <span className="text-xl font-bold">SmartAI4u</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Transforming businesses worldwide with intelligent AI solutions and comprehensive training programs.
              </p>
              <p className="text-primary-foreground/60 text-sm">
                © 2024 SmartAI4u. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>AI Strategy Consulting</li>
                <li>Custom AI Solutions</li>
                <li>AI Training Programs</li>
                <li>Global Implementation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>contact_us@SmartAI4u.com</p>
                <p>Global 24/7 Support</p>
                <p>2+ Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App