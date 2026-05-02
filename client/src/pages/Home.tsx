import { useState, useRef } from 'react';
import { ChevronDown, Sparkles, Shield, ShoppingCart, Star, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { sections } from '@/data/prompts';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492543845/hLGa9EfwPvK33FdUVeNSrc/hero-future-tech-TR75KLfGbgT3v2NjxbmFLn.webp';
const MASCOT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492543845/hLGa9EfwPvK33FdUVeNSrc/cute-character-mascot-bnuLYxsmvVAuxVsdZRw7df.png';
const DIVIDER = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492543845/hLGa9EfwPvK33FdUVeNSrc/gradient-divider-3SqA8o4MQPv5bVNfn5Uj7B.png';

const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/sberry.CYH', icon: '📘' },
  { name: 'Instagram', url: 'https://www.instagram.com/sberry0111/', icon: '📷' },
  { name: 'Threads', url: 'https://www.threads.com/@sberrychang?xmt=AQF0zFxzZ80fhsNEI9P6tG6Hmc3Oqn2v2pVYacCGkT2wikU', icon: '🧵' },
  { name: 'YouTube', url: 'https://www.youtube.com/@sberry.c', icon: '▶️' },
  { name: 'Substack', url: 'https://substack.com/@berrycweekly?utm_campaign=profile&utm_medium=profile-page', icon: '📧' },
];

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setExpandedSection(sectionId);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 左側文字內容 */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold gradient-text leading-tight">
                ChatGPT 圖片生成完整指南
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                從防護系統到進階玩法，掌握 AI 生圖的無限可能
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('section-1')}
                className="glow-button text-lg"
              >
                開始探索 →
              </button>
              <Button
                variant="outline"
                size="lg"
                className="neon-border text-lg"
                onClick={() => scrollToSection('section-1')}
              >
                查看完整指南
              </Button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold gradient-text">37+</p>
                <p className="text-muted-foreground">完整提示詞</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">4</p>
                <p className="text-muted-foreground">系統主題</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">∞</p>
                <p className="text-muted-foreground">創意應用</p>
              </div>
            </div>
          </div>

          {/* 右側吉祥物 */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-sm h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img
                src={MASCOT}
                alt="AI 助手"
                className="relative w-full h-full object-contain drop-shadow-2xl float-up"
              />
            </div>
          </div>
        </div>

        {/* 向下箭頭 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* 分隔線 */}
      <div className="relative h-20 flex items-center justify-center overflow-hidden">
        <img
          src={DIVIDER}
          alt="divider"
          className="w-full h-12 object-cover"
        />
      </div>

      {/* 個人介紹區塊 */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="glass-card neon-border p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex-shrink-0">
                <div className="text-6xl">🍓</div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-display font-bold mb-3 gradient-text">
                  嗨！我是草莓姊姊
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  也是「莓好生活」的創作者。我建立這個公開指南的初衷，是想把 <span className="font-semibold text-primary">ChatGPT Images 2.0</span> 的完整應用心得毫不保留地分享給大家。我將它拆解成四大分類，每個子頁面都有詳細的進階玩法，還有我反覆測試過、可以直接複製使用的指令（Prompt）。
                </p>
                <p className="text-muted-foreground mb-6">
                  這裡是我持續更新的靈感庫，歡迎各位朋友直接取用！如果你覺得這些整理對你有幫助，也歡迎追蹤我，一起在 AI 創作的路上探險。
                </p>
                
                {/* 社群連結 */}
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="text-sm font-semibold">{link.name}</span>
                      <ExternalLink className="w-4 h-4 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主題導覽 */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
              四大系統主題
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              完整涵蓋 AI 生圖的防護、電商、進階和個人應用
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="glass-card neon-border p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{section.emoji}</div>
                  <span className="text-2xl font-bold text-primary">
                    {section.number}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {section.description}
                </p>
                <div className="text-xs text-accent font-semibold group-hover:translate-x-1 transition-transform">
                  {section.items.length} 個提示詞 →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細內容區 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => {
                if (el) sectionRefs.current[section.id] = el;
              }}
              className="mb-12 scroll-mt-20"
            >
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.id ? null : section.id
                  )
                }
                className="w-full glass-card neon-border p-6 text-left hover:shadow-xl transition-all duration-300 mb-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-4xl">{section.emoji}</span>
                    <div>
                      <h2 className="text-2xl font-display font-bold">
                        {section.number}. {section.title}
                      </h2>
                      <p className="text-muted-foreground mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {expandedSection === section.id && (
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  {section.items.map((item) => (
                    <div key={item.id} className="glass-card p-6">
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === item.id ? null : item.id
                          )
                        }
                        className="w-full text-left hover:opacity-80 transition-opacity"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-primary flex-1">
                            {item.title}
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${
                              expandedItem === item.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </button>

                      {expandedItem === item.id && (
                        <div className="mt-4 pt-4 border-t border-border/30 space-y-4">
                          {/* 提示詞內容 */}
                          <div className="relative">
                            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-xs text-accent whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
                              {item.content}
                            </pre>
                            <button
                              onClick={() => copyToClipboard(item.content, item.id)}
                              className="absolute top-2 right-2 p-2 bg-primary/20 hover:bg-primary/40 rounded-lg transition-colors"
                              title="複製提示詞"
                            >
                              {copiedId === item.id ? (
                                <Check className="w-5 h-5 text-green-400" />
                              ) : (
                                <Copy className="w-5 h-5 text-accent" />
                              )}
                            </button>
                          </div>

                          {/* 提示 */}
                          {item.tips && item.tips.length > 0 && (
                            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                              <p className="font-semibold text-primary mb-2">
                                💡 提示
                              </p>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                {item.tips.map((tip, idx) => (
                                  <li key={idx}>• {tip}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* 參考圖片 */}
                          {item.images && item.images.length > 0 && (
                            <div className="space-y-3">
                              <p className="font-semibold text-accent">
                                📸 參考圖片
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {item.images.map((img, idx) => (
                                  <div
                                    key={idx}
                                    className="relative group overflow-hidden rounded-lg border border-border/30"
                                  >
                                    <img
                                      src={img}
                                      alt={`${item.title} 參考圖 ${idx + 1}`}
                                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                                      onError={(e) => {
                                        const container = e.currentTarget.parentElement;
                                        if (container) {
                                          container.innerHTML =
                                            '<div class="w-full h-48 bg-muted/30 flex items-center justify-center text-muted-foreground text-sm">圖片載入中或暫無法顯示</div>';
                                        }
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 特色功能區 */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold gradient-text mb-4">
              為什麼選擇這份指南？
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛡️',
                title: '完整防護系統',
                desc: '從基礎防護咒語到平台安全區設定，確保每次生圖都符合商業需求',
              },
              {
                icon: '🎨',
                title: '進階創意玩法',
                desc: '14 個進階應用，從香氣視覺化到品牌 DNA 表，展現無限可能',
              },
              {
                icon: '✨',
                title: '個人專屬應用',
                desc: '12 個個人主題，從命理到穿搭、從人格分析到舞蹈動作',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass-card neon-border-cyan p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 區塊 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-y border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            準備好開始了嗎？
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            立即探索 37+ 完整提示詞，掌握 AI 生圖的所有秘訣
          </p>
          <button 
            onClick={() => scrollToSection('section-1')}
            className="glow-button text-lg"
          >
            開始使用 →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-4">
                ChatGPT 圖片生成指南
              </h3>
              <p className="text-muted-foreground text-sm">
                完整的 AI 生圖提示詞系統，由草莓姊姊精心整理
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">主題</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button 
                    onClick={() => scrollToSection('section-1')}
                    className="hover:text-primary transition-colors"
                  >
                    防護系統
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('section-2')}
                    className="hover:text-primary transition-colors"
                  >
                    電商實戰
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('section-3')}
                    className="hover:text-primary transition-colors"
                  >
                    進階策略
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('section-4')}
                    className="hover:text-primary transition-colors"
                  >
                    個人應用
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">追蹤草莓姊姊</h4>
              <ul className="space-y-2 text-sm">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span>{link.icon}</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2026 ChatGPT 圖片生成完整指南 | 由草莓姊姊（莓好生活）精心整理
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
