
import React from 'react'
import { Animated, FlatList } from 'react-native'
import renderer from 'react-test-renderer'

it('Renders an AnimatedFlatList', () => {
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
    renderer.create(
        <AnimatedFlatList />
    )
})
