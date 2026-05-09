import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    
    const postData = {
      author: form.author,
      title: form.title,
      body: form.body,
      public: form.public,
    };
    

    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        
        setForm({ author: '', title: '', body: '', public: false });
      })
      .catch((err) => {
        console.error(' Errore:', err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Crea un nuovo post</h2>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  Errore: {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">Autore</label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    required
                    placeholder="Inserisci il tuo nome"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Titolo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="Titolo del post"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">Testo del post</label>
                  <textarea
                    className="form-control"
                    id="body"
                    name="body"
                    value={form.body}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Scrivi il contenuto del post..."
                  />
                </div>
                
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="public"
                    name="public"
                    checked={form.public}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="public">
                    Pubblico
                  </label>
                  <small className="text-muted ms-2">
                    {form.public ? '(visibile a tutti)' : '(bozza privata)'}
                  </small>
                </div>
                
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Invio in corso...
                      </>
                    ) : (
                      'Crea Post'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
