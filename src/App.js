import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import TextArea from './components/TextArea';
import Converter from './services/Converter';

class App extends Component {

  state = {
    selected: 'romaji',
    romajiContent: '',
    hiraganaContent: '',
    katakanaContent: ''
  };

  converter = new Converter();

  onClick = str => this.setState({selected: str});

  onClickHiragana = () => this.onClick('hiragana');

  onClickRomaji = () => this.onClick('romaji');

  onClickKatakana = () => this.onClick('katakana');

  onInputHiragana = hiragana => {
    const romaji = this.converter.toRomaji(hiragana);
    const katakana = this.converter.toKatakana(romaji);

    this.setState({romajiContent: romaji, hiraganaContent: hiragana, katakanaContent: katakana});
  };

  onInputRomaji = romaji => {
    const hiragana = this.converter.toHiragana(romaji);
    const katakana = this.converter.toKatakana(romaji);

    this.setState({romajiContent: romaji, hiraganaContent: hiragana, katakanaContent: katakana});
  };

  onInputKatakana = katakana => {
    const romaji = this.converter.toRomaji(katakana);
    const hiragana = this.converter.toHiragana(romaji);

    this.setState({romajiContent: romaji, hiraganaContent: hiragana, katakanaContent: katakana});
  };

  render() {
    const {selected, romajiContent, hiraganaContent, katakanaContent} = this.state;
    return (
      <main className="App">
        <article onClick={this.onClickRomaji}>
          <Title text={'Rōmaji'}/>
          <TextArea content={romajiContent}
                    disabled={selected !== 'romaji'}
                    changeFn={this.onInputRomaji}
          />
        </article>
        <section>
          <article onClick={this.onClickHiragana}>
            <Title text={'Hiragana'}/>
            <TextArea content={hiraganaContent}
                      disabled={selected !== 'hiragana'}
                      changeFn={this.onInputHiragana}
            />
          </article>
          <article onClick={this.onClickKatakana}>
            <Title text={'Katakana'}/>
            <TextArea content={katakanaContent}
                      disabled={selected !== 'katakana'}
                      changeFn={this.onInputKatakana}
            />
          </article>
        </section>
      </main>
    );
  }
}

export default App;
