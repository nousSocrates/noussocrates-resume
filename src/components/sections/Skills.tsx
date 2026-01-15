import { Box, Card, CardContent, Grid, Chip, Typography } from "@mui/material";



const skillGroups = [
  {
    title: "Education & Pedagogy",
    skills: [
      "Curriculum Design",
      "Assessment & Item Writing",
      "CBC / KJSEA",
      "Teacher Training",
      "Music Education",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "Google Workspace",
      "Microsoft Teams",
      "PowerPoint",
      "VS Code",
    ],
  },
  {
    title: "Creative & Media",
    skills: [
      "Music Composition",
      "Arrangement",
      "Animaker",
      "Adobe Express",
      "Content Creation",
    ],
  },
];

export default function Skills() {
  return (
    <Box component="section" id="skills">
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
        Skills & Competencies
      </Typography>

      {/* Skills Grid */}
      <Grid container spacing={3}>
        {skillGroups.map((group) => (
          <Grid key={group.title} size={{ xs: 12, sm: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                >
                  {group.title}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: "secondary.main",
                        color: "accent.main",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
