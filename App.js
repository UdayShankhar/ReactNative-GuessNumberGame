import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameisOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameisOver(false)
  }

  function gameOverHandler() {
    setGameisOver(true)
  }

  var screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <View>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
