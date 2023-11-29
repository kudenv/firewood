
import styles from './feed.module.less';
export default function HomePage() {
  return (
    <main className="MainArea">
      <div className="MainArea__content">
        <section className="menuSection">
          <h2 className="singleNav">Feed</h2>
          <ul>
            <li className="singleNav">Home</li>
            <li className="singleNav">Network</li>
            <li className="singleNav">Profile</li>
          </ul>
        </section>
      </div>
    </main>  
      
  );
}