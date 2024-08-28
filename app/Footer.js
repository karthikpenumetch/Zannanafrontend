import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerRow}>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>ZANNANA</Text>
          <Text style={styles.footerText}>
            Play fun tabletop games with your friends and meet new people. Obtain new games and share yours with others!
            <Text style={styles.footerLink}> Read more...</Text>
          </Text>
          <Text style={styles.footerContact}>+1 800 854-36-80</Text>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerHeading}>Follow us</Text>
          {/* Add your social media icons here */}
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerHeading}>Product</Text>
          <Text style={styles.footerLink}>Landing Page</Text>
          <Text style={styles.footerLink}>Popup Builder</Text>
          <Text style={styles.footerLink}>Web-design</Text>
          <Text style={styles.footerLink}>Content</Text>
          <Text style={styles.footerLink}>Integrations</Text>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerHeading}>Resources</Text>
          <Text style={styles.footerLink}>Academy</Text>
          <Text style={styles.footerLink}>Blog</Text>
          <Text style={styles.footerLink}>Themes</Text>
          <Text style={styles.footerLink}>Hosting</Text>
          <Text style={styles.footerLink}>Developers</Text>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerHeading}>Company</Text>
          <Text style={styles.footerLink}>About Us</Text>
          <Text style={styles.footerLink}>Careers</Text>
          <Text style={styles.footerLink}>FAQs</Text>
          <Text style={styles.footerLink}>Teams</Text>
          <Text style={styles.footerLink}>Contact Us</Text>
        </View>
      </View>

      <View style={styles.footerBottom}>
        <Text style={styles.footerBottomText}>© 2021 All Rights Reserved</Text>
        <Text style={styles.footerBottomText}>Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#2B0000", // Dark red background color
    paddingVertical: 20,
    width: '100%', // Full width of the screen
    alignSelf: 'stretch', // Ensures the footer stretches across the screen
  },
  footerRow: {
    flexDirection: 'row', // Arrange footer sections horizontally
    justifyContent: 'space-between', // Space sections evenly
    flexWrap: 'wrap', // Allow sections to wrap if screen size is small
    paddingHorizontal: 20, // Padding on the sides
  },
  footerSection: {
    flex: 1, // Take up equal space
    marginHorizontal: 10, // Space between sections
    marginBottom: 20,
  },
  footerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  footerText: {
    color: "#fff",
    marginTop: 10,
    lineHeight: 20,
  },
  footerContact: {
    color: "#fff",
    marginTop: 10,
  },
  footerHeading: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  footerLink: {
    color: "#fff",
    marginBottom: 5,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: "#fff",
    paddingTop: 15,
    alignItems: "center",
  },
  footerBottomText: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 5,
  },
});

export default Footer;
