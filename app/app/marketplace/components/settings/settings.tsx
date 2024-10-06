import React, { useState } from 'react';
import "./settings.css";

type TabName = "Profile" | "Application" | "Security" | "Activity" | "Payment Method" | "API";

const Settings: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>("Profile");

  const settingsTabs: TabName[] = ["Profile", "Application", "Security", "Activity", "Payment Method", "API"];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Profile":
        return (
          <>
            <div className="user-update--container">
              <UserProfile />
              <UpdateProfile />
            </div>
            <PersonalInfo />
          </>
        );
      case "Application":
        return <ApplicationSettings />;
      case "Security":
        return <SecuritySettings />;
      case "Activity":
        return <ActivitySettings />;
      case "Payment Method":
        return <PaymentMethodSettings />;
      case "API":
        return <APISettings />;
    }
  };

  return (
    <main className="settings--container dark:bg-gray-800 dark:text-white bg-white text-black">
      {renderTabContent()}
    </main>
  );
};


const UserProfile: React.FC = () => (
  <section className="user--container dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* User profile content here */}
  </section>
);

const UpdateProfile: React.FC = () => (
  <section className="profile--container dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* Update profile content here */}
  </section>
);

const PersonalInfo: React.FC = () => (
  <section className="personal--info dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* Personal info content here */}
  </section>
);

const ApplicationSettings: React.FC = () => (
  <section className="application-settings dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* Application settings content here */}
  </section>
);

const SecuritySettings: React.FC = () => (
  <section className="security-settings dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* Security settings content here */}
  </section>
);

const ActivitySettings: React.FC = () => (
  <section className="activity-settings dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* Activity settings content here */}
  </section>
);

const PaymentMethodSettings: React.FC = () => (
  <section className="payment-settings dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* Payment method settings content here */}
  </section>
);

const APISettings: React.FC = () => (
  <section className="api-settings dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
    {/* API settings content here */}
  </section>
);


export default Settings;
