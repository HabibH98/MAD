
import { NativeTabs } from 'expo-router/native-tabs';

export function AppTabs() {
  return (
    <NativeTabs tintColor="#c45a2d">

      {/* Home */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>
          Home
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          drawable="ic_menu_view"
        />
      </NativeTabs.Trigger>

      {/* Menukaart */}
      <NativeTabs.Trigger name="menu">
        <NativeTabs.Trigger.Label>
          Menu
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="fork.knife"
          drawable="ic_menu_agenda"
        />
      </NativeTabs.Trigger>

      {/* Reserveren */}
      <NativeTabs.Trigger name="reserveren">
        <NativeTabs.Trigger.Label>
          Reserveren
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="calendar"
          drawable="ic_menu_my_calendar"
        />
      </NativeTabs.Trigger>

      {/* Nieuws */}
      <NativeTabs.Trigger name="nieuws">
        <NativeTabs.Trigger.Label>
          Nieuws
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'newspaper', selected: 'newspaper.fill' }}
          drawable="ic_menu_info_details"
        />
      </NativeTabs.Trigger>

      {/* Contact */}
      <NativeTabs.Trigger name="contact">
        <NativeTabs.Trigger.Label>
          Contact
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'phone', selected: 'phone.fill' }}
          drawable="ic_menu_call"
        />
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}

export default AppTabs;
