import { Addresses } from "../../../../@types/users";
import { Users } from "../../../../@types/users";
import { useState } from "react";
import setLocalStorage from "../../../service/localStorage";
import api from "../../../service/api";
import { NativeScrollEvent, NativeSyntheticEvent, Animated } from "react-native";

export default function useProfile(animated: any, opacity: Animated.Value) {
  const [user, setUser] = useState({} as Users);
  const [address, setAddress] = useState({} as Addresses);
  const [token, setToken] = useState("");

  async function handleUserData() {
    const data = await setLocalStorage().getItem('user');

    if(!data) {
      return;
    }

    const { response } = JSON.parse(data)
    setUser(response.user);
    setAddress(response.user.Addresses[0]);
    setToken(response.token)
  }


  async function saveUserProfile(data: any) {
    try {
      await api.put(`/users/update/${user.id}`, data, {
        headers: {
          Authorization: token
        }
      })

    } catch (error) {
      console.log(error)
    }
  }

  function scroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    if(e.nativeEvent.contentOffset.y < 25) {
      animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: true
      }).start();
      return;
    }

    animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  }
  
  return { 
    handleUserData,
    saveUserProfile,
    scroll,
    user,
    address
  }
}