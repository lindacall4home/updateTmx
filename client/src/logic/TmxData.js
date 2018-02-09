import BinarySearchTree from './BinarySearchTree';
import TranslationUnit from './TranslationUnit';
import TranslationUnitVariant from './TranslationUnitVariant';

class TmxData  {
  constructor(fileContents){
    var tuv = fileContents
      .split('<tu ');
    tuv.shift();
    var tmxData = tuv
      .map((tu, index) => {
        return tu.split('<tuv')
        .reduce((acc, val, index) => {
          if(index === 0){
            acc['id'] = val.split('"')[1];
          }
          else{
            var tuv = val.split('"')[10];
            acc[val.split('"')[1]] = tuv.substring(tuv.indexOf('<seg>') + 5, tuv.indexOf('</seg>'));
          }
          return acc;
        }, {})
      })
      .reduce((acc, val, index) => {
        acc['tuid'] = val.id;
        acc['tu'] = val;
        return acc;
      }, {});
    console.log(tmxData);
    // this.bTree = new BinarySearchTree();
    // var tuvArr = [];
    // tuvArr.push(new TranslationUnitVariant('en-us', 'Select solver'));
    // tuvArr.push(new TranslationUnitVariant('fr-fr', 'Select solver'));
    // tuvArr.push(new TranslationUnitVariant('de-de', 'Select solver'));
    // tuvArr.push(new TranslationUnitVariant('ja-jp', 'Select solver'));
    //
    // this.bTree.add(new TranslationUnit(1, tuvArr))

  }
}

export default TmxData
