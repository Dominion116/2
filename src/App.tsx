import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Copy, Rocket, CheckCircle2, PartyPopper, ArrowRight, Dna, Twitter, Send, BarChart2 } from "lucide-react"
import Logo from "@/assets/logo.png"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"

// Simplified Nav Component
const Navbar = ({ onCopy }: { onCopy: () => void }) => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="hidden sm:flex font-mono text-xs gap-2 text-muted-foreground hover:text-foreground" onClick={onCopy}>
                    CONTRACT
                </Button>
                <Button size="sm" className="rounded-full px-6 font-semibold" onClick={() => window.open('https://raydium.io/swap', '_blank')}>
                    Buy Now
                </Button>
            </div>
        </div>
    </nav>
)

const BackgroundEffects = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-multiply animate-pulse" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
)

function App() {
  const CA = "E9wczLkHYnwhSeVjSx5myGb318dN8Po6UvjR3jb7pump"
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    toast.success("Copied to clipboard", {
      className: "bg-background border-border shadow-2xl",
      icon: <CheckCircle2 className="w-4 h-4 text-primary" />,
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const triggerConfetti = () => {
    const end = Date.now() + 1000;
    const colors = ['#10b981', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  useEffect(() => {
    triggerConfetti()
  }, [])

  return (
    <div className="min-h-screen bg-background font-sans text-foreground relative">
      <BackgroundEffects />
      <Toaster position="bottom-right" />
      <Navbar onCopy={handleCopy} />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 lg:space-y-10 text-center lg:text-left order-1"
            >
                <div>
                    <Badge variant="secondary" className="mb-6 lg:mb-8 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-primary bg-primary/10 border-none">
                        🎂 Celebrating 2 Years of PumpFun
                    </Badge>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] lg:leading-[1] mb-6 lg:mb-8">
                        The Power of <br/>
                        <span className="text-primary underline decoration-primary/20 decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">$2.</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                        No roadmap. No complex utility. Just a commemorative token celebrating a legendary milestone. Simple, honest, and purely for the culture.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button size="lg" className="rounded-full px-8 lg:px-10 h-14 lg:h-16 text-base lg:text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                        Buy $2 Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 lg:px-10 h-14 lg:h-16 text-base lg:text-lg font-bold bg-background border-2 hover:bg-muted/50 transition-all" onClick={handleCopy}>
                        {copied ? <CheckCircle2 className="w-5 h-5 mr-3 text-primary" /> : <Copy className="w-5 h-5 mr-3" />}
                         {CA.slice(0, 6)}...{CA.slice(-4)}
                    </Button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 pt-4 lg:pt-6">
                    <div>
                        <span className="block font-black text-2xl lg:text-3xl mb-1">2Y</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground">History</span>
                    </div>
                    <div className="hidden sm:block w-px h-10 lg:h-12 bg-border"></div>
                    <div>
                        <span className="block font-black text-2xl lg:text-3xl mb-1">0%</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground">Tax</span>
                    </div>
                    <div className="hidden sm:block w-px h-10 lg:h-12 bg-border"></div>
                    <div>
                        <span className="block font-black text-2xl lg:text-3xl mb-1">100%</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground">Vibes</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-square w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[550px] mx-auto lg:ml-auto order-2 lg:order-2"
            >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] sm:blur-[120px] animate-pulse" />
                <img 
                    src={Logo} 
                    alt="$2 Token" 
                    className="relative w-full h-full object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.1)] sm:drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700 ease-in-out"
                />
            </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-secondary/30 border-y border-border/50 relative overflow-hidden">
        {/* Vibe Marquee */}
        <div className="absolute top-0 left-0 w-full overflow-hidden py-2 bg-primary/5 border-b border-primary/10 select-none pointer-events-none">
            <div className="flex animate-scroll-x whitespace-nowrap">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-[0.4em] font-black text-primary/30 mx-8">
                        PUMP SECOND YEAR ANNIVERSARY • $2 IS THE LOGICAL CHOICE • 
                    </span>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 lg:mt-16">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-20">
                <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-4 lg:mb-6">Why $2?</h2>
                <p className="text-muted-foreground text-lg lg:text-xl font-medium">
                    Stripped back. Minimalist. Meaningful. <br className="hidden md:block" />
                    Focusing on the milestone that started it all.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                <Card className="bg-background border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all rounded-[2rem] lg:rounded-3xl group">
                    <CardContent className="pt-8 lg:pt-10 pb-6 lg:pb-8 px-6 lg:px-8">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 lg:mb-8 text-primary group-hover:scale-110 transition-transform">
                             <PartyPopper className="w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Historical Lore</h3>
                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed font-medium">
                            Capturing the legendary 2nd anniversary of Pump. A digital artifact for those who were there.
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all rounded-[2rem] lg:rounded-3xl group">
                    <CardContent className="pt-8 lg:pt-10 pb-6 lg:pb-8 px-6 lg:px-8">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 lg:mb-8 text-primary group-hover:scale-110 transition-transform">
                             <Dna className="w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Clean Meme</h3>
                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed font-medium">
                            No fluff. No over-engineered promises. Just the number 2 and the community that drives it.
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all rounded-[2rem] lg:rounded-3xl group">
                    <CardContent className="pt-8 lg:pt-10 pb-6 lg:pb-8 px-6 lg:px-8">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 lg:mb-8 text-primary group-hover:scale-110 transition-transform">
                             <Rocket className="w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Fair Origins</h3>
                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed font-medium">
                            Launched with transparency. Liquidity burned, ownership renounced. Purely community-run.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
                <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-4">Tokenomics</h2>
                <p className="text-muted-foreground text-lg lg:text-xl font-medium">2 simple 2 explain.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] bg-secondary/40 border border-border/50 text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-2">1,000,000,000</div>
                    <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Total Supply</div>
                </div>
                <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] bg-secondary/40 border border-border/50 text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-2">0/0%</div>
                    <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Buy/Sell Tax</div>
                </div>
                <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] bg-secondary/40 border border-border/50 text-center sm:col-span-2 lg:col-span-1">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-2">IMMUTABLE</div>
                    <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Contract Status</div>
                </div>
            </div>

            <div className="mt-12 lg:mt-16 p-6 lg:p-8 bg-background rounded-2xl lg:rounded-3xl border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto group">
                <div className="flex-1 min-w-0 text-center md:text-left">
                    <span className="block text-[0.6rem] uppercase tracking-[0.3em] font-black text-primary mb-2">Verified Contract Address</span>
                    <code className="text-xs sm:text-sm md:text-lg font-mono text-foreground font-bold break-all md:break-normal">
                        {CA}
                    </code>
                </div>
                <Button size="lg" variant="secondary" className="rounded-xl lg:rounded-2xl w-full md:w-auto h-14 lg:h-16 px-8 hover:bg-primary hover:text-primary-foreground transition-all" onClick={handleCopy}>
                    {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    <span className="ml-2">Copy Address</span>
                </Button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex items-center gap-3 font-black text-lg tracking-tight">
                <img src={Logo} alt="Logo" className="w-8 h-8 grayscale opacity-50" />
                <span className="opacity-50">$2 TOKEN</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Twitter className="w-4 h-4" />
                    </div>
                    Twitter
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Send className="w-4 h-4" />
                    </div>
                    Telegram
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <BarChart2 className="w-4 h-4" />
                    </div>
                    Dexscreener
                </a>
            </div>
            <p className="text-[10px] font-medium text-muted-foreground/60 max-w-[200px] lg:max-w-none text-center lg:text-right">
                PUMPFUN SECOND YEAR ANNIVERSARY
            </p>
        </div>
      </footer>
    </div>
  )
}

export default App

