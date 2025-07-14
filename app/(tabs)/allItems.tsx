// import React from 'react';
// import { View, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel'; // ✅ Fixed import

// const { width, height } = Dimensions.get('window');

// const Align = () => {
//   const data = [
//     { id: 1, image: require('../../assets/movies/mov.jpg') },
//     { id: 2, image: require('../../assets/movies/mov4.jpeg') },
//     { id: 3, image: require('../../assets/movies/sunny-leone.avif') }
//   ];

//   return (
//     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Carousel
//           data={data}
//           renderItem={({ item }) => <MovieCard item={item} />}
//           sliderWidth={width}
//           itemWidth={width * 0.7}
//           inactiveSlideOpacity={0.6}
//           firstItem={1}
//         />
//     </View>

//   );
// };

// const MovieCard = ({ item }) => {
//   const { width, height } = Dimensions.get('window');

//   return (
//     <TouchableWithoutFeedback>
//       <View style={{ alignItems: 'center' }}>
//         <Image
//           source={item.image}
//           style={{
//             width: width * 0.6,
//             height: height * 0.4,
//             borderRadius: 24,
//           }}
//         />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };


// export default Align;
