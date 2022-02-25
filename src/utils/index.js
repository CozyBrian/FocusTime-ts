import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const SettingsIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="ios-settings-outline" size={30} color="black" />
    </TouchableOpacity>
  )
}