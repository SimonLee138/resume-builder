import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-16 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
              aria-label="GitHub"
            >
              <IconBrandGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
              aria-label="Twitter"
            >
              <IconBrandTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}