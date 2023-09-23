import SaySometing from './saySometing'; //saySometingクラスをimportで読み込む

const root: HTMLElement | null = document.getElementById('root');

// インスタンス化
const saySometing = new SaySometing('Hello TypeScript');
saySometing.sayText(root);
