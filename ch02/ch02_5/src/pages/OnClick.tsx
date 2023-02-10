
const rootDiv = document.getElementById('root');

if(rootDiv){
  rootDiv.onclick = (e: Event) => {
    const {isTrusted,target,bubbles}=e
    console.log('클릭되었습니다', isTrusted, target, bubbles)
  }
  rootDiv.onclick = (e: Event)=> {
    const {isTrusted,target, bubbles}=e;
    console.log('rootDiv도 클릭되었습니다.', isTrusted, target, bubbles);
  }
}
export default function CopyMe(){
  return <div>Onclick</div>
}