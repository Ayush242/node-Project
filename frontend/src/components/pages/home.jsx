import SignUp from "./SignUp";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the to-do App</h1>
          <p>
            This is a to-do app that allows you to add, delete, and edit tasks.
          </p>
        </div>
        <div className="hero-illustration">
          <img
            src="/hero_illustration.svg"
            alt="Illustration"
            width={"50%"}
            height={"50%"}
          />
        </div>
      </section>
      <section className="features">
        <div className="feature-lines">
          <h2>Unleash Your Inner Hero: Earn Rewards, Build Your Avatar!</h2>
          <p>
            Conquer tasks, unlock rewards, and customize your avatar! Transform
            your daily routine into an epic adventure of productivity and
            self-discovery. Join us and level up your life today!
          </p>
        </div>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-image">
              <img
                src="https://source.unsplash.com/random/150%C3%97150/?habits,challenge,arcade,todo,routine"
                alt=""
              />
            </div>
            <div className="feature-text">
              <h3>Stay Ahead: Keep Tabs on Your Daily Routine</h3>
              <p>
                Stay on top of your game with effortless progress tracking
                &#8211; your roadmap to success starts here
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-image">
              <img
                src="https://source.unsplash.com/random/150%C3%97150/?gaming,habits,challenge,arcade,todo,routine"
                alt=""
              />
            </div>
            <div className="feature-text">
              <h3>Reward Redemption</h3>
              <p>
                Unlock a treasure trove of rewards and turn your avatar into a
                reflection of your achievements &#8211; every milestone deserves
                its accessory!
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-image">
              <img
                src="https://source.unsplash.com/random/150%C3%97150/?gaming,habits,challenge,todo,routine"
                alt=""
              />
            </div>
            <div className="feature-text">
              <h3>Global Challenges</h3>
              <p>
                Join the global movement towards a healthier lifestyle and
                conquer challenges with fellow users &#8211; victory never
                looked this rewarding!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="signup" id="signup-section">
        <div className="signup-text">
          <h2 style={{ fontSize: "2rem" }}>Ready to Level Up?</h2>
          <p style={{ fontSize: "1.2rem" }}>
            Join our community of achievers! Sign up now to embark on your
            journey towards a more rewarding and fulfilling lifestyle.
            Let&rsquo;s conquer challenges together!
          </p>
        </div>
        <SignUp />
      </section>
    </main>
  );
}
