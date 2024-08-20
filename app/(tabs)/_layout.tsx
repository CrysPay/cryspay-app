import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "../../components/TabBarIcon";

interface TabBarIconProps {
  color: string;
  focused: boolean;
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          headerShown: false,
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <TabBarIcon
              name={focused ? "card" : "card-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="manage"
        options={{
          title: "Manage",
          headerShown: false,
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <TabBarIcon
              name={focused ? "file-tray-stacked" : "file-tray-stacked-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}