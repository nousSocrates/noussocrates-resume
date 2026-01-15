import { Box, Divider, Typography } from "@mui/material";

const experiences = [
  {
    role: "Junior School Teacher",
    institution: "Ministry of Education",
    period: "2022 – Present",
    duties: [
      "Teaching and assessment under the CBC curriculum.",
      "Designing learner-centered lesson plans and evaluations.",
      "Participating in curriculum implementation and moderation.",
    ],
  },
  {
    role: "Music & Creative Arts Trainer",
    institution: "Private & Institutional Programs",
    period: "2019 – Present",
    duties: [
      "Training learners in music theory, performance, and composition.",
      "Arranging music for school ensembles and performances.",
      "Facilitating creative arts workshops and mentorship sessions.",
    ],
  },
  {
    role: "Web Developer & Content Creator",
    institution: "Socrates Schools Online",
    period: "2020 – Present",
    duties: [
      "Developing educational web platforms using modern web technologies.",
      "Creating digital learning resources and interactive content.",
      "Managing deployment, version control, and platform maintenance.",
    ],
  },
];

export default function Experience() {
  return (
    <Box component="section" id="experience">
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 600,
          color: "primary.main",
        }}
      >
        Professional Experience
      </Typography>

      {experiences.map((exp, index) => (
        <Box key={exp.role} sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            {exp.role}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "secondary.main",
              fontWeight: 500,
            }}
          >
            {exp.institution}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "text.secondary",
            }}
          >
            {exp.period}
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            {exp.duties.map((duty) => (
              <Typography
                component="li"
                key={duty}
                variant="body2"
                sx={{ mb: 0.5 }}
              >
                {duty}
              </Typography>
            ))}
          </Box>

          {index < experiences.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );
}
