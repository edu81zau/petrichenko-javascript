import './App.css';

function Card({ children, title }) {
    console.log('App',children);
    return (
        <div className="card">
            <div className="card-content">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
}

export default function Profile() {
    return (
        <div>
            <Card title="Photo">
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={100}
                    height={100}
                />
            </Card>
            <Card title="About">
                <p>
                    Aklilu Lemma was a distinguished
                    Ethiopian scientist who discovered a
                    natural treatment to schistosomiasis.
                </p>
            </Card>
        </div>
    );
}