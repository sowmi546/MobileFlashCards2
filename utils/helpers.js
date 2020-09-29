import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesome, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
export const FLASHCARD_STORAGE_KEY = 'UdaciFlashCards:cards'
import {white} from './colors';
import {AsyncStorage} from '@react-native-community/async-storage'
//import { AsyncStorage } from 'react-native'


  export const cardsInfo = {
    "one" :{
      deckID : "one",
      title : 'React',
      questions: [
        {
          question : "react question1",
          answer : 'react answer1'
        },
        {
          question : "react question2",
          answer : 'react answer2'
        },
        {
          question : "react question3",
          answer : 'react answer3'
        }
      ]

    },
    "two" :{
      deckID : "two",
      title : 'Angular',
      questions: [
        {
          question : "angular question1",
          answer : 'angular answer1'
        },
        {
          question : "angular question2",
          answer : 'angular answer2'
        },
        {
          question : "angular question3",
          answer : 'angular answer3'
        }
      ]

    },
    "three" :{
      deckID : "three",
      title : 'Javascript',
      questions: [
        {
          question : "Javascript question1",
          answer : 'Javascript answer1'
        },
        {
          question : "Javascript question2",
          answer : 'Javascript answer2'
        },
        {
          question : "Javascript question3",
          answer : 'Javascript answer3'
        }
      ]

    },

  }

  //AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(cardsInfo))
