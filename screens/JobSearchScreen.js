import React from 'react'
import { View, Text, ScrollView, TextInput, Image } from 'react-native'

const JobSearchScreen = () => {

  const popular = [
    {
      roles: 'DEVELOPER',
      img: require('../assets/dev.png'),
      time: 'Full time',
      pay: '400'
    },
    {
      roles: 'Accountant',
      img: require('../assets/accountant.png'),
      time: 'Intern',
      pay: '250'
    },
    {
      roles: 'SUPPORT',
      img: require('../assets/dev2.png'),
      time: 'Full time',
      pay: '350'
    },
  ]

  const jobs = [
    {
      title: 'Graphic designer',
      time: 'Full time',
      price: '1520'
    },
    {
      title: 'Nurse',
      time: 'Part time',
      price: '400'
    },
    {
      title: 'Auditor',
      time: 'Full time',
      price: '780'
    },
    {
      title: 'Shoe designer',
      time: 'Intern',
      price: '1520'
    },
    {
      title: 'Watchman',
      time: 'Full time',
      price: '400'
    },
    {
      title: 'Auditor',
      time: 'Full time',
      price: '780'
    },
  ]

  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: "#e5e5e5", flex: 1 }}>
      <Text style={{ fontFamily: 'Nunito_600SemiBold', marginTop: 50, color: "#b0b0b0", fontSize: 15 }}>Hello zaid !</Text>
      <Text style={{ fontFamily: 'Nunito_800ExtraBold', fontSize: 20, marginTop: 5, marginBottom: 5 }}>Find your best jobs</Text>
      <View style={{ backgroundColor: "#fff", padding: 5, marginTop: 5, borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ fontFamily: 'nunito', }}
          placeholder="What are you looking"
          placeholderTextColor="#b0b0b0"
        />
        <View style={{ height: 30, width: 30, backgroundColor: "#000000", borderRadius: 8, position: 'absolute', right: 5, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/searc.png')} />
        </View>
      </View>
      <Text style={{ fontFamily: 'Nunito_800ExtraBold', fontSize: 20, marginTop: 15, marginBottom: 15 }}>Most popular</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {popular.map((title, index) => {
          return (
            <View key={index} style={{ backgroundColor: "#fff", height: 330, width: 150, borderTopLeftRadius: 20, borderBottomRightRadius: 20, marginRight: 15 }}>
              <Image source={title.img} style={{ width: 150, height: 150 }} />
              <View style={{ backgroundColor: "#000000", height: 50, borderBottomRightRadius: 20, paddingHorizontal: 15, paddingVertical: 5 }}>
                <Text style={{ color: "#fff", fontSize: 13, fontFamily: 'Nunito_800ExtraBold', textTransform: 'uppercase' }}>{title.roles}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontFamily: 'nunito', color: "#fff", fontSize: 12, backgroundColor: "#3e3c3c", alignItems: 'center', borderRadius: 5, paddingHorizontal: 5, justifyContent: 'center', marginTop: 3 }}>{title.time}</Text>
                  <Text style={{ fontFamily: 'nunito', color: "#fff", fontSize: 12 }}>$ {title.pay}</Text>
                </View>
              </View>
            </View>
          )

        })}
      </ScrollView>
      <Text style={{ fontFamily: 'Nunito_800ExtraBold', fontSize: 20, marginTop: 15, marginBottom: 15 }}>Near by jobs</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {jobs.map((item, index) => {
          return (
            <View key={index} style={{ backgroundColor: "#fff", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
              <View style={{ backgroundColor: "#dfdfdf", height: 50, width: 50, borderRadius: 8, marginRight: 10 }}>
                <Image source={require('../assets/pentool.png')} style={{ height: 50, width: 50 }} />
              </View>
              <Text style={{ fontFamily: 'Nunito_800ExtraBold', textTransform: 'uppercase' }}>{item.title}</Text>
              <Text style={{ fontFamily: 'nunito', color: "#fff", fontSize: 12, backgroundColor: "#3e3c3c", borderRadius: 5, paddingHorizontal: 5, marginTop: 3, textAlign: 'center', position: 'absolute', right: 70 }}>{item.time}</Text>
              <Text style={{ fontFamily: 'Nunito_800ExtraBold', position: 'absolute', right: 15 }}>$ {item.price}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default JobSearchScreen
