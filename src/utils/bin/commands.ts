// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Here are all the available commands:
\n${c} 
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
}

// About
export const about = async (args: string[]): Promise<string> => {
  return `\nHi, my name is Luke. 
Welcome to my website!

---------------------

I'm currently a rising junior who loves everything related to computers.
Find my resume by typing 'resume'.
`
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  return `You can email me @ luke23571113@gmail.com`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/luke23571113/`);

  return 'Opening github...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


//TODO: update this

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗     ██╗   ██╗██╗  ██╗███████╗                     
██║     ██║   ██║██║ ██╔╝██╔════╝                     
██║     ██║   ██║█████╔╝ █████╗                       
██║     ██║   ██║██╔═██╗ ██╔══╝                       
███████╗╚██████╔╝██║  ██╗███████╗                     
╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                     
                                                      
 ██████╗ ██████╗ ██╗     ██╗     ██╗███╗   ██╗███████╗
██╔════╝██╔═══██╗██║     ██║     ██║████╗  ██║██╔════╝
██║     ██║   ██║██║     ██║     ██║██╔██╗ ██║███████╗
██║     ██║   ██║██║     ██║     ██║██║╚██╗██║╚════██║
╚██████╗╚██████╔╝███████╗███████╗██║██║ ╚████║███████║
 ╚═════╝ ╚═════╝ ╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝

Type 'help' to see the list of available commands.
`;
};
