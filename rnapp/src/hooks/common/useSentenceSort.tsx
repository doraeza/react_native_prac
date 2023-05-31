import { View,Text, Image } from "react-native"


const useSplitAndAlignText = (text:string) => {
    if (!text) {
      return null;
    }
  
    const sentences = text.split(',');
    return sentences.map((sentence, index) => (
      <Text key={index} style={{ textAlign: 'left' }}>{sentence.trim()}.</Text>
    ));
  };
export default useSplitAndAlignText