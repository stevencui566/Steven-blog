// ============ 数据定义 ============

// 证书数据 - 根据文件名分类
const certificates = [
  // 三好学生
  { title: '北京市三好学生', category: 'three-good', file: '【三好】北京市 三好学生.png', year: '2025' },
  { title: '六年级三好学生', category: 'three-good', file: '【三好】六年级三好学生.png', year: '2025' },
  { title: '五年级三好学生', category: 'three-good', file: '【三好】五年级三好学生.jpg', year: '2024' },
  { title: '四年级三好学生', category: 'three-good', file: '【三好】四年级三好学生.jpg', year: '2023' },
  
  // 学校荣誉
  { title: '2025-26年度探索未来之星', category: 'school', file: '【学校荣誉】25-26年度探索未来之星.jpg', year: '2025' },
  { title: '2024-25第二学期创新创意好少年', category: 'school', file: '【学校荣誉】24-25第二学期创新创意好少年.jpg', year: '2025' },
  { title: '2023-24第二学期积极锻炼好少年', category: 'school', file: '【学校荣誉】23-24第二学期积极锻炼好少年.jpg', year: '2024' },
  { title: '2023-24年度第一学期勤思善学好少年', category: 'school', file: '【学校荣誉】23-24年度第一学期勤思善学好少年.jpg', year: '2023' },
  { title: '2022-23第二学期善于表达美少年', category: 'school', file: '【学校荣誉】22-23第二学期善于表达美少年.jpg', year: '2023' },
  { title: '2021-22年度第二学期勤思善学好少年', category: 'school', file: '【学校荣誉】21-22年度第二学期勤思善学好少年.jpg', year: '2022' },
  { title: '2023年红领巾奖章2星', category: 'school', file: '【学校荣誉】2023年红领巾奖章2星.jpg', year: '2023' },
  { title: '2020-21第二学期阳光健康好少年', category: 'school', file: '【学校荣誉】20-21第二学期阳光健康好少年.jpg', year: '2021' },
  
  // 科创
  { title: '青少年编程设计大赛一等奖', category: 'stem', file: '【科创】青少年编程设计大赛一等奖.jpg', year: '2024' },
  { title: '创意编程一等奖', category: 'stem', file: '【科创】创意编程一等奖-21年.jpg', year: '2021' },
  { title: 'GESP Python 5级认证', category: 'stem', file: '【科创】GESP5级证书.jpg', year: '2024' },
  { title: 'STEAM-未来工程师-京港地铁', category: 'stem', file: '【科创】STEAM-未来工程师-京港地铁.jpg', year: '2024' },
  { title: '2024年科技梦想家', category: 'stem', file: '【科创】24年科技梦想家.jpg', year: '2024' },
  
  // 学科
  { title: 'PET 英语等级证书', category: 'academic', file: '【学科】PET证书.jpg', year: '2024' },
  { title: '作文新帆杯优秀奖', category: 'academic', file: '【学科】作文新帆杯优秀奖.jpg', year: '2023' },
  
  // 体育
  { title: '2025年优秀运动员', category: 'sports', file: '【体育】2025年优秀运动员.jpg', year: '2025' },
  { title: '2024年足球最佳射手', category: 'sports', file: '【体育】24年足球最佳射手.jpg', year: '2024' },
  { title: '2025年足球最佳射手', category: 'sports', file: '【体育】25年足球最佳射手.jpg', year: '2025' },
  { title: '小学生足球比赛男子甲组第六名', category: 'sports', file: '【体育】足球小学生足球比赛男子甲组第六名-2.jpg', year: '2025' },
  
  // 劳动实践
  { title: '版画学习-劳动小能手', category: 'labor', file: '【劳动实践】版画学习-劳动小能手.jpg', year: '2024' },
  { title: '生态瓶学习-劳动小能手', category: 'labor', file: '【劳动实践】生态瓶学习-劳动小能手.jpg', year: '2024' },
  
  // 文艺
  { title: '北京电视台"我是少年"演出', category: 'art', file: '【文艺】北京电视台参加我是少年演出.jpg', year: '2024' },
  { title: '十二届青少年故事节二等奖', category: 'art', file: '【文艺】十二届青少年故事节二等奖.jpg', year: '2023' },
  { title: '绘画优秀奖', category: 'art', file: '【文艺】绘画优秀奖-口腔.jpg', year: '2024' },
  
  // 志愿者
  { title: '2025-26志愿服务好少年', category: 'volunteer', file: '【志愿者】25-26志愿服务好少年.jpg', year: '2025' },
  { title: '2024-25红领巾优秀志愿者', category: 'volunteer', file: '【志愿者】24-25红领巾优秀志愿者.jpg', year: '2024' },
  { title: '2023-24红领巾优秀志愿者', category: 'volunteer', file: '【志愿者】23-24红领巾优秀志愿者.jpg', year: '2023' },
];

// 分类标签映射
const categoryLabels = {
  'three-good': { label: '三好学生', class: 'tag-three-good' },
  'sports': { label: '体育', class: 'tag-sports' },
  'stem': { label: '科创', class: 'tag-stem' },
  'academic': { label: '学科', class: 'tag-academic' },
  'art': { label: '文艺', class: 'tag-art' },
  'volunteer': { label: '志愿者', class: 'tag-volunteer' },
  'school': { label: '学校荣誉', class: 'tag-school' },
  'labor': { label: '劳动实践', class: 'tag-labor' },
};

// 照片数据
const gallery = [
  // 校园活动
  { title: '2024开学典礼分享', category: 'campus', file: '2024开学典礼分享.jpg' },
  { title: '校园活动 · 节目表演', category: 'campus', file: '校园活动 节目表演.jpg' },
  { title: '校园活动 · 金秋诗会表演', category: 'campus', file: '校园活动 金秋诗会表演.jpg' },
  { title: '每周升国旗 · 音乐指挥', category: 'campus', file: '每周升国旗 音乐指挥.jpg' },
  { title: '每周升国旗 · 音乐指挥', category: 'campus', file: '每周升国旗 音乐指挥1.jpg' },
  
  // 校园代表
  { title: '中国少年先锋队西城区第三次代表大会', category: 'representative', file: '中国少年先锋队 西城区第三次代表大会.jpg' },
  { title: '少代会留影', category: 'representative', file: '少代会照片.jpg' },
  { title: '校园代表 · 天安门升国旗观礼', category: 'representative', file: '校园代表 参加天安门升国旗观礼台.jpg' },
  { title: '校园代表 · 谈天说地丛书发布会发言', category: 'representative', file: '校园代表 参加谈天说地丛书发布会 发言.jpg' },
  
  // 社会实践
  { title: '一亿个瓶子回收 · 公益活动', category: 'social', file: '【社会实践】 一亿个瓶子回收 公益活动 .jpg' },
  { title: '中轴线文化宣传 · 公益活动', category: 'social', file: '【社会实践】 中轴线文化宣传 公益活动.jpg' },
  { title: '守护蔚蓝之光 · 公益活动', category: 'social', file: '【社会实践】 守护蔚蓝之光 公益活动.jpg' },
  { title: '快乐植树季 · 公益活动', category: 'social', file: '【社会实践】 快乐植树季 公益活动jpg.jpg' },
  
  // 兴趣爱好
  { title: 'STEAM 京港地铁挑战赛', category: 'interest', file: 'STEAM 京港地铁挑战赛1.jpg' },
  { title: '吉他表演', category: 'interest', file: '【兴趣爱好】 吉他表演.jpg' },
  { title: '2025西城小学生足球联赛', category: 'interest', file: '【兴趣爱好】2025西城小学生足球联赛1.jpg' },
  { title: '北京广播电视台吉他表演', category: 'interest', file: '【兴趣爱好】艺术表演 北京广播电视台吉他表演.jpg' },
  { title: '音乐会吉他表演', category: 'interest', file: '【兴趣爱好】艺术表演 音乐会吉他表演.jpg' },
];

const basePath = 'Steven-resume';
const certPath = `${basePath}/荣誉证书`;
const galleryPath = `${basePath}/经历照片`;

// ============ DOM 元素 ============

const honorGrid = document.getElementById('honorGrid');
const galleryGrid = document.getElementById('galleryGrid');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentLightboxItems = [];
let currentLightboxIndex = 0;

// ============ 渲染证书 ============

function renderCertificates(filter = 'all') {
  honorGrid.innerHTML = '';
  const filtered = filter === 'all' ? certificates : certificates.filter(c => c.category === filter);
  
  filtered.forEach((cert, index) => {
    const cat = categoryLabels[cert.category];
    const card = document.createElement('div');
    card.className = 'certificate-card';
    card.style.animationDelay = `${index * 80}ms`;
    card.innerHTML = `
      <img src="${certPath}/${cert.file}" alt="${cert.title}" loading="lazy" 
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23f1f5f9%22 width=%22400%22 height=%22300%22/><text fill=%22%2394a3b8%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22>证书图片加载中...</text></svg>'" />
      <div class="card-body">
        <div class="card-title">${cert.title}</div>
        <span class="card-tag ${cat.class}">${cat.label}</span>
        <span class="card-tag ml-2 bg-slate-100 text-slate-600">${cert.year}</span>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(filtered, index, 'cert'));
    honorGrid.appendChild(card);
    
    // 触发显示动画
    requestAnimationFrame(() => card.classList.add('show'));
  });
}

// ============ 渲染照片 ============

function renderGallery(filter = 'all') {
  galleryGrid.innerHTML = '';
  const filtered = filter === 'all' ? gallery : gallery.filter(g => g.category === filter);
  
  filtered.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.style.animationDelay = `${index * 80}ms`;
    card.innerHTML = `
      <img src="${galleryPath}/${item.file}" alt="${item.title}" loading="lazy"
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23334155%22 width=%22400%22 height=%22300%22/><text fill=%22%2394a3b8%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22>图片加载中...</text></svg>'" />
      <div class="gallery-overlay">
        <div class="gallery-title">${item.title}</div>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(filtered, index, 'gallery'));
    galleryGrid.appendChild(card);
    
    requestAnimationFrame(() => card.classList.add('show'));
  });
}

// ============ Lightbox ============

function openLightbox(items, index, type) {
  currentLightboxItems = items.map(item => ({
    src: type === 'cert' ? `${certPath}/${item.file}` : `${galleryPath}/${item.file}`,
    title: item.title,
    category: item.category
  }));
  currentLightboxIndex = index;
  updateLightbox();
  lightbox.classList.remove('hidden');
  requestAnimationFrame(() => lightbox.classList.add('active'));
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  setTimeout(() => lightbox.classList.add('hidden'), 300);
  document.body.style.overflow = '';
}

function updateLightbox() {
  const item = currentLightboxItems[currentLightboxIndex];
  lightboxImg.src = item.src;
  lightboxCaption.textContent = item.title;
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length;
  updateLightbox();
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
  updateLightbox();
}

// ============ 滚动显示动画 ============

function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  
  revealElements.forEach(el => observer.observe(el));
}

// ============ 导航栏滚动效果 ============

function setupNavbarScroll() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ============ 分类过滤器 ============

function setupHonorFilters() {
  const buttons = document.querySelectorAll('.honor-filter');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertificates(btn.dataset.category);
    });
  });
}

function setupGalleryFilters() {
  const buttons = document.querySelectorAll('.gallery-filter');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.category);
    });
  });
}

// ============ 移动端菜单 ============

function setupMobileMenu() {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // 点击菜单链接后关闭
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ============ Lightbox 事件 ============

function setupLightboxEvents() {
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextLightbox);
  lightboxPrev.addEventListener('click', prevLightbox);
  
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// ============ 初始化 ============

document.addEventListener('DOMContentLoaded', () => {
  renderCertificates();
  renderGallery();
  setupScrollReveal();
  setupNavbarScroll();
  setupHonorFilters();
  setupGalleryFilters();
  setupMobileMenu();
  setupLightboxEvents();
});
