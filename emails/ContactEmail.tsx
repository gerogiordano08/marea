// src/emails/ContactEmail.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  budget: string;
  serviceType: string;
  serviceLabel?: string;
  serviceData: any;
  brief: string;
  submissionId: string;
}

export const ContactEmail = ({
  name,
  email,
  budget,
  serviceType,
  serviceLabel,
  serviceData,
  brief,
  submissionId,
}: ContactEmailProps) => {
  const isWeb = serviceType === "web_dev";
  const isSystems = serviceType === "systems";
  const isScripting = serviceType === "scripting";

  return (
    <Html>
      <Head />
      <Preview>Marea: New Project Transmission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={brand}>MAREA</Text>
            <Text style={tag}>[ TRANSMISSION_RECEIVED ]</Text>
          </Section>

          <Section style={content}>
            {/* Client Info */}
            <Text style={sectionTitle}>Client Information</Text>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
            
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            
            <Text style={label}>Budget Range</Text>
            <Text style={{ ...value, color: "#0052FF" }}>{budget}</Text>

            {/* Dynamic Discovery Data */}
            <Text style={sectionTitle}>Discovery: {serviceLabel ? serviceLabel.toUpperCase() : serviceType.replace('_', ' ').toUpperCase()}</Text>
            
            {isWeb && (
              <>
                <Text style={label}>Project Type</Text>
                <Text style={value}>{serviceData.projectType}</Text>
                <Text style={label}>Motion Level</Text>
                <Text style={value}>{serviceData.motionLevel}</Text>
              </>
            )}

            {isSystems && (
              <>
                <Text style={label}>Objective</Text>
                <Text style={value}>{serviceData.coreObjective}</Text>
                <Text style={label}>System Type</Text>
                <Text style={value}>{serviceData.systemType}</Text>
                {serviceData.userScope && (
                  <>
                    <Text style={label}>User Scope</Text>
                    <Text style={value}>{serviceData.userScope}</Text>
                  </>
                )}
              </>
            )}

            {isScripting && (
              <>
                <Text style={label}>Workflow Challenge</Text>
                <Text style={value}>{serviceData.workflowChallenge}</Text>
                {serviceData.frequency && (
                  <>
                    <Text style={label}>Frequency</Text>
                    <Text style={value}>{serviceData.frequency}</Text>
                  </>
                )}
                {serviceData.dataSources && (
                  <>
                    <Text style={label}>Data Sources</Text>
                    <Text style={value}>{serviceData.dataSources}</Text>
                  </>
                )}
                <Text style={label}>Target Output</Text>
                <Text style={value}>{serviceData.targetOutput}</Text>
              </>
            )}

            {/* Brief */}
            <Text style={sectionTitle}>Technical Brief</Text>
            <Section style={briefBox}>
              <Text style={briefText}>{brief}</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © 2026 MAREA SOFTWARE ENGINEERING • MENDOZA, ARG
            </Text>
            <Text style={footerId}>ID: {submissionId}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

// --- Styles (Kinetic Geometry Inlined) ---

const main = {
  backgroundColor: "#FAFAFA",
  fontFamily: 'Outfit, Helvetica, Arial, sans-serif',
};

const container = {
  margin: "40px auto",
  width: "600px",
  backgroundColor: "#FFFFFF",
  border: "2px solid #09090B",
};

const header = {
  backgroundColor: "#09090B",
  padding: "40px",
};

const brand = {
  color: "#FFFFFF",
  fontSize: "24px",
  fontWeight: "700",
  letterSpacing: "4px",
  margin: "0",
};

const tag = {
  color: "#0052FF",
  fontFamily: "monospace",
  fontSize: "10px",
  marginTop: "8px",
  letterSpacing: "2px",
};

const content = {
  padding: "40px",
};

const sectionTitle = {
  fontSize: "10px",
  textTransform: "uppercase" as const,
  letterSpacing: "3px",
  color: "#0052FF",
  borderBottom: "1px solid #E5E7EB",
  paddingBottom: "10px",
  marginTop: "32px",
  marginBottom: "16px",
  fontFamily: "monospace",
};

const label = {
  fontSize: "10px",
  color: "#9CA3AF",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  marginBottom: "4px",
};

const value = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#09090B",
  marginBottom: "16px",
};

const briefBox = {
  backgroundColor: "#F9FAFB",
  padding: "24px",
  borderLeft: "4px solid #0052FF",
};

const briefText = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#374151",
  fontStyle: "italic",
  margin: "0",
};

const footer = {
  padding: "24px",
  backgroundColor: "#F9FAFB",
  borderTop: "1px solid #E5E7EB",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "10px",
  color: "#9CA3AF",
  margin: "0",
};

const footerId = {
  fontSize: "9px",
  color: "#D1D5DB",
  marginTop: "4px",
  fontFamily: "monospace",
};