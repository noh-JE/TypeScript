type PageInfo = {
    title: string;
};

type Page = 'home' | 'about' | 'contact';

// Record Type
// 한 Page 당 PageInfo를 연겷ㄹ 수가 있음
const nav: Record<Page, PageInfo> = {
  home: {title: 'Home'},
  about: {title: 'About'},
  contact: {title: 'Contact'},
};

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog';