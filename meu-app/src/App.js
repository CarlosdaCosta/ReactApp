import React from 'react';
import './App.css';

const cats = [
  {
    name: "Octavio I",
    picture: "https://i0.statig.com.br/bancodeimagens/0l/b4/xl/0lb4xln09s6ptabwkf70u73jp.jpg", 
    like: 1000000
  },
  {
    name: "Octavio II",
    picture: "https://i0.statig.com.br/bancodeimagens/0l/b4/xl/0lb4xln09s6ptabwkf70u73jp.jpg",
    like: 1000
  },
  {
    name: "Octavio III",
    picture:"https://i0.statig.com.br/bancodeimagens/0l/b4/xl/0lb4xln09s6ptabwkf70u73jp.jpg", 
    like: 10
  }
];

class FormNewCat extends React.Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.elements.catName.value);
    this.props.handleNewCat(
      e.target.elements.catName.value,
      e.target.elements.catUrl.value
    )
    e.target.elements.catName.value = '';
    e.target.elements.catUrl.value = '';
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="catName" required></input>
          </div>
          <div>
            <input type="url" name="catUrl" required></input>
          </div>
          <div>
            <button type="submit">Cadastrar</button>      
          </div>
        </form>
      </div>
    )
  }
}

const CatView = props => {
  const {cat, indice, handleClickCat} = props;
  return (
    <div className="catView">
      <div><img src={cat.picture} alt="" /></div>
      <div>{cat.name}</div>
      <div>
        <button onClick={() => handleClickCat(indice)}>Gostei! {cat.like}</button>
      </div>
    </div>
  )
};

class App extends React.Component {
  state = {
    cats
  };

  handleClickCat = key => {
    cats[key].like +=1;
    this.setState({
      cats
    });
  }

  handleNewCat = (catName, catUrl) => {
    cats.unshift({
      name:catName,
      picture: catUrl,
      like: 0
    })
    this.setState({
      cats
    });
  }


  render () {
    return (
      <div>
        <FormNewCat handleNewCat={this.handleNewCat}/>
        {this.state.cats.map((cat,key) => (
           <CatView cat={cat} key={key} indice={key} handleClickCat={this.handleClickCat}/>
        ))}
      </div>
      )
  }
}

export default App;
