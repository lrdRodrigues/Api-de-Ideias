import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ideaItem.css';
import './service/api';

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [ideas, setIdeas] = useState('')

  useEffect(() => {

  }, []
  )

  function handleSubmit(e) {
    e.preventDefault()
    const idea = {
      title,
      description,
      tags
    }

    console.log('idea', idea)
  }


  return (
    <div id="app">
      <div className="jumbotron">
        <div className="container text-center"><h2>Hello React</h2></div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter your Idea Title"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Tell a little bit about your idea"
                  required
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  placeholder="What kind of idea is this?"
                  value={tags}
                  onChange={e => setTags(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="imgUr"
                  placeholder="Do you have any image to represent it? Paste the URL here!"
                  value={imgUrl}
                  onChange={e => setImgUrl(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success btn-block">Create!</button>
              </div>
            </form>
          </div>

          <div className="col-sm-8">

            <div className="card">
              <img className="card-img-top" src="https://c1.wallpaperflare.com/preview/2/523/771/mindmap-brainstorm-idea-innovation.jpg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Idea Title</h5>
                <p className="card-text">Idea Description</p>
                <strong>Tags: </strong>
              </div>
              <div className="card-body">
                <button className="btn btn-warning">Edit Idea</button> &nbsp;
                <button className="btn btn-danger">Delete Idea</button>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src="https://c1.wallpaperflare.com/preview/2/523/771/mindmap-brainstorm-idea-innovation.jpg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Idea Title</h5>
                <p className="card-text">Idea Description</p>
                <strong>Tags: </strong>
              </div>
              <div className="card-body">
                <button className="btn btn-warning">Edit Idea</button> &nbsp;
                <button className="btn btn-danger">Delete Idea</button>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src="https://c1.wallpaperflare.com/preview/2/523/771/mindmap-brainstorm-idea-innovation.jpg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Idea Title</h5>
                <p className="card-text">Idea Description</p>
                <strong>Tags: </strong>
              </div>
              <div className="card-body">
                <button className="btn btn-warning">Edit Idea</button> &nbsp;
                <button className="btn btn-danger">Delete Idea</button>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src="https://c1.wallpaperflare.com/preview/2/523/771/mindmap-brainstorm-idea-innovation.jpg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Idea Title</h5>
                <p className="card-text">Idea Description</p>
                <strong>Tags: </strong>
              </div>
              <div className="card-body">
                <button className="btn btn-warning">Edit Idea</button> &nbsp;
                <button className="btn btn-danger">Delete Idea</button>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://c1.wallpaperflare.com/preview/2/523/771/mindmap-brainstorm-idea-innovation.jpg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Idea Title</h5>
                <p className="card-text">Idea Description</p>
                <strong>Tags: </strong>
              </div>
              <div className="card-body">
                <button className="btn btn-warning">Edit Idea</button> &nbsp;
                <button className="btn btn-danger">Delete Idea</button>
              </div>
            </div>




            <div className="col"></div>
          </div>

        </div>

      </div>
    </div >
  );
}

export default App;
